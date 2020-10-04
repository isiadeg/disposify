import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login.service';
import{FacebookloginService} from '../facebooklogin.service';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs




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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform: FormGroup;
errormessage:any={};
loginerror: any;

private error ={
  required: "This field is required",
    email: "Please enter correct email",
    minlength: "Your password must be at least eight characters",
    passwordmatch: "Your password did not match"
}
  constructor(private fb: FormBuilder, private http: HttpClient,
  private loginservice:LoginService, private faceb: FacebookloginService) { }


  ngOnInit() {
    this.loginform = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });


    let password = this.loginform.get('password');
    this.valuechange('password', password);

    let email = this.loginform.get('email');
    this.valuechange('email', email);

  }
testlogin():void{
  //this.loginservice.testlogin();
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
 login(){
  console.log(this.loginform.value);
  let boss = document.getElementsByClassName("boss")[0];
  boss.className = boss.className.replace(/\bnodisplay\b/g, "display");
//alert("Logging You in. It might take some seconds. Please wait.....")
   this.loginerror = this.loginservice.login(this.loginform.value)



  /*.subscribe((data)=>{
    console.log(data);
  },
  (error)=>{
    this.loginerror = error;
  }
)*/
}
}
