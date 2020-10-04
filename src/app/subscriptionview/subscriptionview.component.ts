import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-mysubscription',
  templateUrl: './subscriptionview.component.html',
  styleUrls: ['./subscriptionview.component.css']
})
export class SubscriptionviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
private http: HttpClient, private loginservice: LoginService) { }
uid:any;
subscriptionview:any;
datas:any;
data:any;
packagess:any;

pid:any;
  ngOnInit() {
    //this.uid = this.route.parent.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((data)=>{this.uid = data.get("id");
   this.pid = data.get("pid");

    console.log(this.uid);
  console.log(this.pid);

           this.http.post<any>('http://localhost:3030/api/getpackagedetails', {id: this.loginservice.toUseIdToken,
          business_id:this.uid, packageid:this.pid}).subscribe((data)=>{
      this.subscriptionview  = data;

this.data = this.subscriptionview.message;
console.log(this.data);
this.packagess=this.data;


var astring= this.packagess.package.packagedescription;
let fullstoparray = [];
for (let i=0; i<astring.length; i++){var position = astring.indexOf(".", i); i=position;  if(position != -1){fullstoparray.push(position); }else{i = astring.length} console.log(fullstoparray);}
var again =0; var slicedstring= "";for(let  i = 0; i<fullstoparray.length; i++){ if(i%2 == 0 && i != 0){slicedstring += astring.slice(again, fullstoparray[i]+1)+`<br /><br />`; again = fullstoparray[i]+1; console.log(slicedstring); } }


this.data.packagedescription = slicedstring;
console.log(this.data.packagedescription);

});
});
}
}
