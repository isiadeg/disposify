import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
datas:any;
  constructor() { }

  ngOnInit() {
    this.datas=[['name',{datetimedaily: "5/9/2020 - 10:30:13", amountowedinbank: -3120, amountremitedinbank: 1200, openingbalanceinbank: 0, profitbank: -3120},
[{datetime: "5/9/2020 - 10:05:08", type: "deposit", amountcollectedfromcustomer: 1000},
{datetime: "5/9/2020 - 10:26:11", type: "deposit", amountcollectedfromcustomer: 1000}
]
],
['Another Name',{datetimedaily: "5/9/2020 - 10:30:13", amountowedinbank: -3120, amountremitedinbank: 1200, openingbalanceinbank: 0, profitbank: -3120},
[]
],
['Again Name',{datetimedaily: "5/9/2020 - 10:30:13", amountowedinbank: -3120, amountremitedinbank: 1200, openingbalanceinbank: 0, profitbank: -3120},
[]
]];


}
}
