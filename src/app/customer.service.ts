import { Injectable } from '@angular/core';
import{Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {LoginService} from './login.service';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService implements Resolve<any>{

  constructor(private router: Router, private route: ActivatedRoute,
private http: HttpClient, private loginservice: LoginService) { }
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
let uid = route.parent.paramMap.get("id");
console.log(uid);
return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
      return this.http.post<any>('http://localhost:3030/api/getcollectorsubscription', {id: idToken,
      business_id:uid});

  });
  }
}
