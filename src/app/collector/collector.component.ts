import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css']
})
export class CollectorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
uid:any;
  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get("id");
  }

}
