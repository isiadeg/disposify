import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../login.service'


@Component({
  selector: 'app-userarea',
  templateUrl: './userarea.component.html',
  styleUrls: ['./userarea.component.css']
})
export class UserareaComponent implements OnInit {
uid:any;
  constructor(private route: ActivatedRoute, private loginservice:LoginService) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get("id");
  }
signout():void{
  this.loginservice.signout();
}
}
