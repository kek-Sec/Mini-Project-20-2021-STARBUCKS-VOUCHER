import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.sass'],
})
export class RedeemComponent implements OnInit {
  //form group stuff
  protected fg: FormGroup;
  fg_init = false;
  //end of form group stuff

  private sub: any;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.showModal();
  }

  //init form data
  init_FormData() {
    if (!this.fg_init) {
      this.fg = this.formBuilder.group({
        voucher: [this.id, Validators.required],
      });
      this.fg_init = true;
    }
  }

  //submit button
  submit() {
    if (this.fg.valid) {
      const doc = new jsPDF();
      var imgData;
      this.generateQR(this.fg.controls['voucher'].value).then((res) => {
        imgData = res;
        doc.setFontSize(40);
        doc.text(this.fg.controls['voucher'].value, 5, 25);
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
        doc.save('voucher.pdf');
      });
    } else {
    }
  }
  generateQR = async (text) => {
    try {
      return await QRCode.toDataURL(text);
    } catch (err) {
      console.error(err);
    }
  };
  //autoshow modal
  showModal() {
    let element: HTMLElement = document.getElementById(
      'open_modal'
    ) as HTMLElement;
    element.click();
  }
  //open modal
  open(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
    };
    this.init_FormData();
    this.modalService.open(content, ngbModalOptions);
  }
}
