import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import {Status} from './status';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
signinerrormessage: any;
redirecturl: any;
user:any=false;
admin:any=false;
toUseIdToken: any;

vendor:boolean = false;
collector:boolean = false;
customer: boolean = false;
  constructor(private http: HttpClient, private router: Router) {
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user);
      if(user){
        this.user = user;
        if(!user.emailVerified && user.providerData[0].providerId !== "facebook.com" ){
        let uid = user.uid;
        console.log(uid);
        user.sendEmailVerification().then(function() {
    // Email sent.
     this.signinerrormessage = "Please verify your email first, we have sent a verification";
    }).catch(function(error) {
    // An error happened.
    console.log(error);
    });

  }else{

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
    this.collector = false;
    this.customer = true;
      this.collector = false;
  }
  if(id.claims.claims =="collector"){
    if(!this.redirecturl){this.redirecturl = `/collector/${this.user.uid}`}
    this.router.navigate([`${this.redirecturl}`]);
    this.customer = false;
    this.collector = true;
    this.customer = false;
  }
  this.user.getIdToken(/* forceRefresh */ true).then((idTokn)=>{
    this.toUseIdToken = idTokn;
  }).catch((e)=>{
    console.log(e);
  })
    });
    console.log(this.user);


  });

    }).catch(function(error) {
    // Handle error
    });

  }



      }
      else{
        this.user=false;
        this.router.navigate(['/login']);
      }
    });
  }
  login(hi):void{
    console.log("in login service");
    firebase.auth().signInWithEmailAndPassword(hi.email, hi.password).then(()=>{
 if(this.user && !this.user.emailVerified){

  let uid = this.user.uid;
  console.log(uid);
  this.user.sendEmailVerification().then((jj)=> {
// Email sent.

this.signinerrormessage = "Please verify your email first, we have sent a verification";
alert(this.signinerrormessage);

}).catch(function(error) {
// An error happen.
});
}
if(this.user && this.user.emailVerified){
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

  this.collector = false;
  this.customer = true;
  this.collector = false;
}
if(id.claims.claims =="collector"){
  if(!this.redirecturl){this.redirecturl = `/collector/${this.user.uid}`}
  this.router.navigate([`${this.redirecturl}`]);
this.customer = false;
  this.collector = true;
    this.customer = false;
}
this.user.getIdToken(/* forceRefresh */ true).then((idTokn)=>{
  this.toUseIdToken = idTokn;
}).catch((e)=>{
  console.log(e);
})
  });
  console.log(this.user);


});

  }).catch(function(error) {
  // Handle error
  });

}
}

    ).catch((error)=>{
      switch(error.code){
        case "auth/invalid-email":
        this.signinerrormessage = "the email entered is not valid";
        break;
        case "auth/user-not-found":
        this.signinerrormessage ="there is no user corresponding to the given email.";
        break;
        case "auth/wrong-password":
        this.signinerrormessage ="The password is invalid for the given email";
        break;
        default:
        this.signinerrormessage = "An error ocurred";
        break;
      }
      alert(this.signinerrormessage);
      return(this.signinerrormessage);
    });

  }

 signout():void{
(async function(){
  await firebase.auth().signOut();
  this.router.navigate(['/login']);
})();
}


}
