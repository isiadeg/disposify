import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminResolverService implements Resolve<any>{

  constructor(private routi:ActivatedRoute, private http: HttpClient,
  private loginservice: LoginService) { }
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{

return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
      return this.http.post<any>('http://localhost:3030/api/registrationapprovals', {id: idToken}, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    })
  });
  }
}
