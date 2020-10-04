import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
uid: any;
  constructor(private route: ActivatedRoute, router: Router ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
    this.uid = params.get("id");
  })
  }

}
