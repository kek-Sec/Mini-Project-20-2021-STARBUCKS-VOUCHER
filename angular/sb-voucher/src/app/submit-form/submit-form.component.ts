import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.sass'],
})
export class SubmitFormComponent implements OnInit {
  //form group stuff
  protected fg: FormGroup;
  fg_init = false;
  //end of form group stuff


  //captcha stuff
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component; //captcha element
  @ViewChild('langInput') langInput: ElementRef; //captcha lang
  //end of captcha stuff

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.showModal();
  }

  //init form data
  init_FormData() {
    if (!this.fg_init) {
      this.fg = this.formBuilder.group({
        amka: [, Validators.required],
        afm: [, Validators.required],
        oaed_card: [, Validators.required],
        at: [, Validators.required],
        recaptcha: ['', Validators.required],
      });
      this.fg_init = true;
    }
  }

  //captcha function for success
  handleSuccess(data) {
    this.captchaSuccess = true;
  }

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
      backdrop : 'static',
      keyboard : false
};
    this.init_FormData();
    this.modalService.open(content, ngbModalOptions);
  }
}
