import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-mysubscription',
  templateUrl: './collectorinformation.component.html',
  styleUrls: ['./collectorinformation.component.css']
})
export class CollectorinformationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
private http: HttpClient, private loginservice: LoginService) { }
uid:any;
mysubscription:any;
datas:any;
  ngOnInit() {
    this.uid = this.route.parent.snapshot.paramMap.get('id');
    this.mysubscription = this.route.snapshot.data['customer'];
    this.mysubscription.subscribe((data)=>{
this.datas = data.message;
console.log(data.message);

    });
  }

}
