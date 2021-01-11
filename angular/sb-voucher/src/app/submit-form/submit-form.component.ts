import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.sass']
})
export class SubmitFormComponent implements OnInit {

  protected fg: FormGroup;

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
  @ViewChild('langInput') langInput: ElementRef;  //captcha lang
  //end of captcha stuff
  

  //add @ViewChild('title', { static: true }) title: ElementRef;





  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.showModal();
  }

  //captcha function for success
  handleSuccess(data) {
    this.captchaSuccess = true;
  }

  //autoshow modal
  showModal()
  {
    let element:HTMLElement = document.getElementById('open_modal') as HTMLElement;
    element.click();
  }
  //open modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  

}
