import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userprofileid',
  templateUrl: './userprofileid.component.html',
  styleUrls: ['./userprofileid.component.css']
})
export class UserprofileidComponent implements OnInit {
datas:any;
datacomg:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.datacomg = this.route.parent.snapshot.data['useriprofile'];
    console.log(this.datacomg);
      this.datacomg.subscribe((d)=>{

          this.datas = d.user;


        console.log(this.datas);
    })*/
  }

}
