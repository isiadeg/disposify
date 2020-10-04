import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Message} from '../message';
import {Error} from '../error';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCxO-zbB4Kxr-xysON9p0WSZyuxIgsnOdw",
    authDomain: "sdgdisposify.firebaseapp.com",
    databaseURL: "https://sdgdisposify.firebaseio.com",
    projectId: "sdgdisposify",
    storageBucket: "sdgdisposify.appspot.com",
    messagingSenderId: "467862733031",
    appId: "1:467862733031:web:58d66e84047d1339606242",
    measurementId: "G-C7P2DGENT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
registerform: FormGroup;


errormessage:any={};
locations: any[]=['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];

private error ={
  required: "This field is required",
    email: "Please enter correct email",
    minlength: "Your password must be at least eight characters",
    passwordmatch: "Your password did not match"
}
  constructor(private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit() {
    this.registerform = this.fb.group({
      fullname:['', Validators.required],
      address: ['', Validators.required],
      phonenumber: ['', Validators.required],
      companyornot: ['', Validators.required],
      customerornot: ['', Validators.required],
      email: ['', [Validators.email, Validators.required ]],
      passwordblock:this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
      },{
        validator: confirmpassword(1)
      }),
      location: ['', Validators.required],

    });

    let fullname = this.registerform.get('fullname');
    this.valuechange('fullname', fullname);
    let address = this.registerform.get('address');
    this.valuechange('address', address);
    let phonenumber = this.registerform.get('phonenumber');
    this.valuechange('phonenumber', phonenumber);
    let companyornot = this.registerform.get('companyornot');
    this.valuechange('companyornot', companyornot);
    let customerornot = this.registerform.get('customerornot');
    this.valuechange('customerornot', customerornot);
    let email = this.registerform.get('email');
    this.valuechange('email', email);
    let password = this.registerform.get('passwordblock.password');
    this.valuechange('password', password);
    let passwordblock=this.registerform.get("passwordblock");
this.valuechange("passwordblock", passwordblock);
    let location = this.registerform.get('location');
    this.valuechange('location', location);

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
save():void{
if(this.registerform.valid){
  if(this.registerform.dirty){
    console.log(this.registerform.value);
  //this.idCardUrl = document.getElementById("uploadidcardmessage").innerHTML;
  this.passportUrl = document.getElementById("uploadpassportmessage").innerHTML;
if(this.passportUrl /*|| this.idCardUrl*/){
    let urls = {/*idCardUrl: this.idCardUrl, */passportUrl: this.passportUrl};
  let together = {...urls, ...this.registerform.value};
console.log(together);
  this.http.post<any | Error>('http://localhost:3030/api/registration', together, {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }).subscribe((data)=>{alert(data.message);},
(error)=>{alert (error.error)});
}else{
  alert("You need to upload passport and i.d. card ");
}
}
}
}

}
