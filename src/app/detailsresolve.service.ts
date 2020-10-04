import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {LoginService} from './login.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsresolveService implements Resolve<any>{

  constructor(private routi:ActivatedRoute, private http: HttpClient,
  private loginservice: LoginService) { }
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
let uid = route.paramMap.get("id");
console.log(uid);
return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
      return this.http.post<any>('http://localhost:3030/api/user', {id: idToken,
      uid:uid});
  });
  }
}
