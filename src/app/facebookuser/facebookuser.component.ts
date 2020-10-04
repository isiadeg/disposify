import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Message} from '../message';
import {Error} from '../error';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import{LoginService} from '../login.service';
import {Status} from '../status';

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
  templateUrl: './facebookuser.component.html',
  styleUrls: ['./facebookuser.component.css']
})
export class FacebookuserComponent implements OnInit {
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
  private router: Router, private route: ActivatedRoute,
private loginserv: LoginService) { }

userid:any;
username:any;
useremail:any;
userphotoURL:any;
customer:any;
collector:any;
toUseIdToken:any;
user:any = this.loginserv.user;
redirecturl:any;
admin:any;
  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get("userid");
    this.username = this.route.snapshot.paramMap.get("username");
    this.useremail = this.route.snapshot.paramMap.get("useremail");
    this.userphotoURL = this.route.snapshot.paramMap.get("userphotourl");

    this.registerform = this.fb.group({
      fullname:[{value: this.username, disabled:true}, Validators.required],
      address: ['', Validators.required],
      phonenumber: ['', Validators.required],
      companyornot: ['', Validators.required],
      customerornot: ['', Validators.required],
      email: [{value: this.useremail, disabled:true}, [Validators.email, Validators.required ]],
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
  this.passportUrl = this.userphotoURL;
if(this.passportUrl /*|| this.idCardUrl*/){
    let urls = {/*idCardUrl: this.idCardUrl, */passportUrl: this.userphotoURL,
    email:this.useremail, fullname:this.username, userid: this.userid};
  let together = {...urls, ...this.registerform.value};
console.log(together);
  this.http.post<any | Error>('http://localhost:3030/api/facebookregistration', together, {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }).subscribe((data)=>{alert(data.message);

        this.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
        // Send token to your backend via HTTPS
        // ...
        console.log(idToken);
      this.http.post<Status>('http://localhost:3030/api/setclaims', {id: idToken}, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
      }).pipe(map(data=><Status>{status:data.status})).subscribe((data)=>{
        console.log(data.status);

      if(data.status == "success"){console.log("admin");}
      if(data.status == "unregistered"){
        console.log("it's unregistered");
        this.router.navigate(['/facebookuser', {userid: this.user.uid, useremail:this.user.providerData[0].email,
        username: this.user.providerData[0].displayName,
      userphotourl:this.user.photoURL}]);
      }
        this.user.getIdTokenResult(true).then((id)=>{
      console.log(id.claims);
      if (!!id.claims.admin) {
        if(!this.redirecturl){this.redirecturl = "/admin"}
        this.router.navigate([`${this.redirecturl}`]);
        this.admin = id.claims.admin
      }
      if(id.claims.claims=="customer"){
        if(!this.redirecturl){this.redirecturl = `/user/${this.user.uid}`}
        this.router.navigate([`${this.redirecturl}`]);
        this.customer = true;
      }
      if(id.claims.claims =="collector"){
        if(!this.redirecturl){this.redirecturl = `/collector/${this.user.uid}`}
        this.router.navigate([`${this.redirecturl}`]);
        this.collector = true;
      }
      this.user.getIdToken(/* forceRefresh */ true).then((idTokn)=>{
        this.toUseIdToken = idTokn;
      }).catch((e)=>{
        console.log(e);
      })
        });



      });
    }).catch(function(error) {
    // Handle error
    });

  },
(error)=>{alert (error.error)});
}else{
  alert("You need to upload passport and i.d. card ");
}
}
}
}

}
