import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Message} from '../message';
import {Error} from '../error';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { LoginService } from "../login.service";
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
  templateUrl: './packagereg.component.html',
  styleUrls: ['../index/index.component.css', '../serviceregister/serviceregister.component.css', './packagereg.component.css']
})
export class PackageregComponent implements OnInit {
registerform: FormGroup;


locations: any[]=['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];
get featureses():FormArray{
  return <FormArray>this.registerform.get("featureses")
}

private error ={
    email: "Please enter correct email",
    minlength: "Your password must be at least eight characters",
    passwordmatch: "Your password did not match",
    required: "This field is required",
}
  constructor(private fb: FormBuilder, private http: HttpClient,
  private route: ActivatedRoute,

private loginservice: LoginService) { }

business_id: any;
errormessage:any={};
  ngOnInit() {
    this.business_id = this.route.parent.snapshot.paramMap.get('id');

    console.log(this.business_id);
    this.registerform = this.fb.group({
      packagename:['', Validators.required],
      packagedescription: ['', Validators.required],
      featureses: this.fb.array([ this.buildfeatureses()]),
    packageprice: ['', Validators.required],

    });

    let packagename = this.registerform.get('packagename');
    this.valuechange('packagename', packagename);
    let packagedescription = this.registerform.get('packagedescription');
    this.valuechange('packagedescription', packagedescription);
    let packageprice = this.registerform.get('packageprice');
    this.valuechange('packageprice', packageprice);
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

buildfeatureses():FormGroup{
  return this.fb.group({
    features: '',
  })
}
addfeatureses():void{
  this.featureses.push(this.buildfeatureses());
}

uploadpicture():void{
  }
  serviceimagesUrl :any[];
  id:any;

save():void{
if(this.registerform.valid){
  if(this.registerform.dirty){
    this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    this.id = idToken;
    console.log(this.id)
    console.log(this.registerform.value);
let serviceimagesUrlstring = document.getElementById("uploadserviceimagesmessage").innerHTML;
let iscomma = serviceimagesUrlstring.search(",");
if(iscomma == -1){
  this.serviceimagesUrl = [];
  this.serviceimagesUrl[0] = serviceimagesUrlstring;
}else{
  let lastcomma = serviceimagesUrlstring.lastIndexOf(",");
  let modified = serviceimagesUrlstring.slice(0, lastcomma);
this.serviceimagesUrl = modified.split(",");
}
console.log(this.serviceimagesUrl);
  if(this.serviceimagesUrl ){
    let urls = {serviceimagesUrl: this.serviceimagesUrl,
    business_id: this.business_id, id:this.id};
  let together = {...urls, ...this.registerform.value};
console.log(together);
  this.http.post<any | Error>('http://localhost:3030/api/packagereg', together, {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }).subscribe((data)=>{alert(data.message);},
(error)=>{alert (error.error.error)});
}else{
  alert("You need to upload Images for your package ");
}});
}
}
}

}
