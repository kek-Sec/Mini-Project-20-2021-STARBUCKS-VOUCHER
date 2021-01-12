import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(private modalService: NgbModal,private router:Router) {}

  ngOnInit(): void {
    this.showModal();
  }
  open(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
    };
    this.modalService.open(content, ngbModalOptions);
  }

  //autoshow modal
  showModal() {
    let element: HTMLElement = document.getElementById(
      'open_modal'
    ) as HTMLElement;
    element.click();
  }
}
