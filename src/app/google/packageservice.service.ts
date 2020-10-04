import { Injectable } from '@angular/core';
import{Packaged} from './packaged';
import {Packagefiles} from './mockdata';
import {Observable, of } from 'rxjs';
import {LoginService} from '../login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PackageserviceService {
uid:any;
  constructor(private loginservice: LoginService,
  private http: HttpClient) { }
     resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
this.uid = route.parent.paramMap.get('id');
     return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
       let id = idToken;
      return this.http.post<any>('http://localhost:3030/api/getpackage', {
         business_id : this.uid,
         id:id
       }, {
         headers: new HttpHeaders({"Content-Type": "application/json"})
       });
     });
   }

}
