import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,  Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  datacoming:any;
  datas:any;
  dataarray: any[];
  headers:any[];
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.datacoming = this.route.snapshot.data['userprofile'];
    this.datacoming.subscribe((d)=>{
      this.datas = d.result.users;
      console.log(this.datas);


    })



  }
actions(uid){
  this.router.navigate(['/admin','user', uid, "userdetails"]);
}

}
