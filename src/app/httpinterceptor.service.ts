 import { Injectable } from '@angular/core';
import {/*HttpInterceptor,*/ HttpRequest, HttpHandler, HttpResponse, HttpEvent} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap, map } from 'rxjs/operators';
/*import{HttpcacheserviceService} from './cache/httpcacheservice.service'; */

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService /*implements HttpInterceptor */{

  /*constructor(private cache: HttpcacheserviceService) { }
  f:any;
  g:any;
   i: number;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
console.log(req.method);
    if(req.method != "GET"){
      this.cache.clearcache(req.url);
      return next.handle(req).pipe(
        tap((event)=>{
          if(event instanceof HttpResponse){
          this.cache.put(req.url, event)
          }
        })
      );
    }
    if(req.method == "GET"){
      console.log("we are in GET");
const cachedresponse = this.cache.get(req.url);
if(cachedresponse){
  this.f= new Date();
  this.g=this.f.getTime();
  let h=cachedresponse["time"];
  this.i=Math.round((h-this.g)/(1000*60*20));
  if(this.i<1){
  console.log("cache"+cachedresponse.respons.body);
  return of(cachedresponse.respons) }
  else{ console.log("we are in else")
    this.cache.clearcache(req.url);
      return next.handle(req).pipe(
        tap((event)=>{
          if(event instanceof HttpResponse){
          this.cache.put(req.url, event)
          }
        })
      );
  }
}

  }
  return next.handle(req).pipe(
    tap((event)=>{
      if(event instanceof HttpResponse){
      this.cache.put(req.url, event)
      }
    })
  )
  }
  */
}
