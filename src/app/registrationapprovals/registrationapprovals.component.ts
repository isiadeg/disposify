import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login.service';
import {Message} from './message';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-registrationapprovals',
  templateUrl: './registrationapprovals.component.html',
  styleUrls: ['./registrationapprovals.component.css']
})
export class RegistrationapprovalsComponent implements OnInit {

  datacoming:any;
  datas:any;
  dataarray: any[];
  headers:any[];
    constructor(private route: ActivatedRoute,
    private http: HttpClient, private loginservice: LoginService) { }

    ngOnInit() {
      this.datacoming = this.route.snapshot.data['resolveadmin'];
      this.datacoming.subscribe((d)=>{
        this.datas = d;
        console.log(this.datas);
        this.dataarray=[];
        let indexes = Object.keys(this.datas);
        for(let index of indexes){
          this.dataarray.push(this.datas[index]);
        }
        console.log(this.dataarray);
      })



      }

    approve(data):void{

      let id = {
        id:this.loginservice.toUseIdToken
      }
      let together = {...data, ...id};
      this.http.post<Message>("http://localhost:3030/api/approveregistration", together,
       {headers: new HttpHeaders({
        "Content-Type": "application/json"
      })}).pipe(map(d=><Message>{
        message: d.message
      })).subscribe((data)=>{alert(data.message);},
    ({error})=>{console.log(error); alert(error.error)})
    }


}
