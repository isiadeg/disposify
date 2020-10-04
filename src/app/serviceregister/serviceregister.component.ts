import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Message} from '../message';
import {Error} from '../error';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../login.service'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";




function confirmpassword(length): ValidatorFn{
  return (c:AbstractControl):{[key: string]: boolean}| null=>{
    let password = c.get('password');
    let confirmpassword = c.get('confirmpassword');
    if(password.pristine || confirmpassword.pristine){
  return null;
}
if(password.value !== confirmpassword.value){
console.log(true)
  return {'passwordmatch': true};

}
return null;
  }
}
@Component({
  selector: 'app-index',
  templateUrl: './serviceregister.component.html',
  styleUrls: ['../index/index.component.css','./serviceregister.component.css']
})
export class ServiceregisterComponent implements OnInit {
registerform: FormGroup;


errormessage:any={};
locations: any[]=['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];

private error ={
  required: "This field is required",
    email: "Please enter correct email",
    minlength: "Your password must be at least eight characters",
    passwordmatch: "Your password did not match"
}
  constructor(private fb: FormBuilder, private http: HttpClient,
  private route: ActivatedRoute,
private loginservice: LoginService) { }

business_id: any;
  ngOnInit() {
    this.business_id = this.route.parent.snapshot.paramMap.get('id');
    console.log(this.business_id);
    this.registerform = this.fb.group({
      companyname:['', Validators.required],
      companyaddress: ['', Validators.required],
      wh_mon_fri_start: ['', Validators.required],
      wh_mon_fri_end: ['', Validators.required],
      wh_sat_start: ['', Validators.required],
      wh_sat_end: ['',  Validators.required ],
      wh_sun_start: ['', Validators.required],
      wh_sun_end: ['', Validators.required ],
      email: ['', [Validators.email, Validators.required]],
      phonenumber: ['',  Validators.required ],
      servicedescription: ['',  Validators.required ],


    });

    let companyname = this.registerform.get('companyname');
    this.valuechange('companyname', companyname);
    let companyaddress = this.registerform.get('companyaddress');
    this.valuechange('companyaddress', companyaddress);
    let phonenumber = this.registerform.get('phonenumber');
    this.valuechange('phonenumber', phonenumber);
    let wh_mon_fri_start = this.registerform.get('wh_mon_fri_start');
    this.valuechange('wh_mon_fri_start', wh_mon_fri_start);
    let email = this.registerform.get('email');
    this.valuechange('email', email);

  }

  valuechange(label, c: AbstractControl):void{
  c.valueChanges.pipe(debounceTime(1000)).subscribe((value)=>{
    this.seterror(c, label);
  });
  }
seterror(c: AbstractControl, label):void{
  this.errormessage[label]="";
  console.log(c);
  if((c.dirty || c.touched) && c.errors){
    let varr = Object.keys(c.errors).map((key)=>this.error[key]).join("");
console.log(varr);

this.errormessage[label]=varr;
  }

}

uploadpicture():void{
  }
  idCardUrl :any ="";
  passportUrl: any="" ;
  certificateUrl: any = "";
  id:any;
save():void{

if(this.registerform.valid){
  if(this.registerform.dirty){
    this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    this.id = idToken;
    console.log(this.id)
    console.log(this.registerform.value);
    this.certificateUrl = document.getElementById("uploadcertificatemessage").innerHTML;
  this.idCardUrl = document.getElementById("uploadidcardmessage").innerHTML;
  this.passportUrl = document.getElementById("uploadpassportmessage").innerHTML;
if(this.passportUrl || this.idCardUrl || this.certificateUrl){
    let urls = {idCardUrl: this.idCardUrl, passportUrl: this.passportUrl, certificateUrl:this.certificateUrl,
    business_id: this.business_id, id:this.id};
  let together = {...urls, ...this.registerform.value};
console.log(together);
  this.http.post<any | Error>('http://localhost:3030/api/businessreg', together, {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }).subscribe((data)=>{alert(data.message);},
(error)=>{alert (error.error)});
}else{
  alert("You need to upload passport and i.d. card ");
}
});
}
}
}

}
