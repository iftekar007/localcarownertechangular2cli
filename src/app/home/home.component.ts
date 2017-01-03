import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Headers,Http} from "@angular/http";
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private submitform:any;
  private http:Http;

  constructor(fb: FormBuilder ,http:Http) {
    this.http=http;

    this.submitform = fb.group({
      fname: [, Validators.required],
      lname: [, Validators.required],
      dealer: [, Validators.required],
      email: [, HomeComponent.validateEmail],
      phone: [, Validators.required],

    });
  }

  ngOnInit() {
  }

  static validateEmail(control: FormControl){

    //console.log('34324324');
    console.log(control.value);
    if (control.value==null ) {
      return { 'invalidEmailAddress': true };

    }
    if( ! control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
      return { 'invalidEmailAddress': true };
    }
    //let appsignupobj=new AppSignup();
    // /console.log(appsignupobj.signupform.value.term);

  }
  submitform1(){
    console.log(111);
    let x:any;
    for(x in this.submitform.controls){
      this.submitform.controls[x].markAsTouched();
      // console.log(333);

    }
    this.submitform.markAsDirty();
    //this.signupform.controls['fname'].markAsTouched();
    if(this.submitform.valid){
      console.log(222);
      //var headers = new Headers();
      //headers.append('Content-Type', 'application/x-www-form-urlencoded');

      //this.items = this.commonservices.getItems();
      let link = 'http://influxiq.com:8004/addlead';
      var submitdata = this.submitform.value;
      console.log(submitdata);
      console.log(submitdata);
      this.http.post(link,submitdata)
          .subscribe(data => {
            //this.router.navigateByUrl('/carlist(adminheader:adminheader//adminfooter:adminfooter)');
            $('#myModal').modal('show');
            this.submitform.reset();

          }, error => {
            console.log("Oooops!");
          });
    }
  }

  gopagetop(){
    $('html, body').animate({scrollTop:$('.form_mainbox').offset().top}, 'slow');
    return false;

  }
}
