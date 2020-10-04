import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, Router,  ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {LoginService} from './login.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionviewService implements Resolve<any>{

  constructor(private router: Router, private route: ActivatedRoute,
private http: HttpClient, private loginservice: LoginService) { }
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
let uid = route.paramMap.get("id");
console.log(uid);
let pid = route.paramMap.get("pid");
console.log(pid);

      return this.http.post<any>('http://localhost:3030/api/getpackagedetails', {id: this.loginservice.toUseIdToken,
      business_id:uid, packageid:pid});

  }
}
