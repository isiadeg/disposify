import { Component, OnInit, AfterContentInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import{PackageserviceService } from './packageservice.service';
import{Packaged} from './packaged';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit, AfterContentInit  {
packagess: Packaged[];
  constructor(private packageserviceService: PackageserviceService, private sanitizer: DomSanitizer,
  private router: Router, private route: ActivatedRoute,
private http: HttpClient, private loginservice: LoginService) { }
uid:any;
dta:any;
  ngOnInit() {
    this.uid = this.route.parent.snapshot.paramMap.get('id');
    this.dta = this.route.snapshot.data['packaged'];
    console.log(this.dta);
    console.log(this.uid);
	 this.setdata();


  }
  ngAfterContentInit(){

	  this.okay();
  }
  i:number;
  sett: number;
  j: number;
  k:any[]=[];
  l:number;
setdata(): void{

	this.dta.subscribe((data)=>{
    console.log(data);
  let to_use = data.message.map(convert);
function convert(item, i){
  let iti = {};
  var converted = {
    package_id: item.package_id,
    id: i+1,
    pictureUrl: item.serviceimagesurl,
    packageName: item.packagename,
    packagePrice: item.packageprice,
    packageDetails:item.packagedescription,
    packageItems:item.featureses,

  }
  return converted;
  console.log(converted);
}  /*dtaa.message.forEach((dtaas)=>{
  id: dtaas.package_id,
  pictureUrl: dtaas.servicesimagesurl,
  packageName: dtaas.packagename,
  packagePrice: dtaas.packageprice,
  packageDetails:dtaas.packagedescription,
  packageItems:featureses,
  business_id: business_id
});*/


  this.packagess=to_use;
for(let sd=0; sd<this.packagess.length; sd++){

  var astring= this.packagess[sd].packageDetails;
  let fullstoparray = [];
  for (let i=0; i<astring.length; i++){var position = astring.indexOf(".", i); i=position;  if(position != -1){fullstoparray.push(position); }else{i = astring.length} console.log(fullstoparray);}
  var again =0; var slicedstring= "";for(let  i = 0; i<fullstoparray.length; i++){ if(i%2 == 0 && i != 0){slicedstring += astring.slice(again, fullstoparray[i]+1)+`<br /><br />`; again = fullstoparray[i]+1; console.log(slicedstring); } }


this.packagess[sd].packageDetails = slicedstring;

}


    console.log(to_use);
for(this.j=0; this.j<this.packagess.length; this.j++){
	//this.sett=this.packagess[this.j].packageItems.length-4;
	for(this.i=0; this.i<this.sett; this.i++){
	//this.packagess[this.j].packageItems.pop();
	//console.log(this.packagess[this.j].packageItems.length);


	}
	for(this.l=0; this.l<this.packagess[this.j].packageItems.length; this.l++){
		this.k.push(this.l);
	}



	}


	}


	)//.then(
//	for(this.j=0; this.j<this.packagess.length; this.j++){

	//});
	console.log(this.k);
}
hide:any;
x:any;

 okay():void{
 }
 hi:any;
 more(id:number):void{
	this.sett =this.packagess[id-1].packageItems.length-1;
	for(this.x=this.sett; this.x>4; this.x--){
	//this.packagess[this.j].packageItems.pop();
	//console.log(this.packagess[this.j].packageItems.length);
			 console.log("packageItem"+id+String(this.x));
			this.hi=this.sanitizer.bypassSecurityTrustStyle("none");
		 	if( document.getElementById("packageItem"+id+String(this.x)).className +=" display"){
				console.log(this.hi);
			}


	}
	document.getElementById("more"+id).className += "no-display";
	document.getElementById("fas"+id).className += "no-display";
	//document.getElementById("test"+id).innerHTML=this.packagess[id-1].packageItems[0];
	}

 packageDetails(packag): void{

	document.getElementById("details"+packag).innerHTML=this.packagess[packag-1].packageDetails;

}
 active(index: number):string{
	 if (index == 0){
		 return "active";
	 }else{
		 return "";
	 }

 }
 chosenpackage(package_id, packagename){
  this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
     let id = idToken;
     this.http.post<any>('http://localhost:3030/api/subscribe', {
       business_id : this.uid,
       id:id,
       package_id : package_id,
       package_name: packagename

     }, {
       headers: new HttpHeaders({"Content-Type": "application/json"})
     }).subscribe((data)=>{alert(data.message);
       this.router.navigate(['/user', this.uid, 'mysubscription']);
     },
   (error)=>{alert (error.error.error)});
   });

 }

 display(id:any){


	 if(id>4){
		 //return this.sanitizer.bypassSecurityTrustStyle("display:none;");
		 return "no-display";
	 }else{
		 //return this.sanitizer.bypassSecurityTrustStyle("display:block");
	 return "display";
	 }

 }



}
