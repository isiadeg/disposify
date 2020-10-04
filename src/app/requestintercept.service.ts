import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HttpHandler } from "@angular/common/http";
import {Observable} from 'rxjs';
import {AdminresolverService} from './adminresolver.service';

@Injectable({
  providedIn: 'root'
})
export class RequestinterceptService implements HttpInterceptor{

  constructor(private ad:AdminresolverService) { }
intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
  if(req.method == "POST" && req.url.startsWith("http://localhost:3030") ){
    let a =req.url
    let b = a.replace(/http:\/\/localhost:3030/g,  "https://us-central1-sdgdisposify.cloudfunctions.net/app");
    console.log(b);
    this.ad.loading=true;
    console.log("request method is post");
    const clone = req.clone({
      setHeaders: {
        "Content-Type":"application/json"
      },
      //url: b
        url: b
    });
    return next.handle(clone);
    this.ad.loading=false;
  }else{
    return next.handle(req);
  }
}

}
