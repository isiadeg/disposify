import { Component, OnInit, OnChanges  } from '@angular/core';
import {Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel,
   NavigationError } from '@angular/router';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {AdminresolverService} from './adminresolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  registerform: FormGroup;
loading: boolean =false;
  constructor(private router: Router, private fb: FormBuilder, private ad:AdminresolverService){

  this.loading = this.ad.loading;
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
      this.ad.loading=true;
      this.loading = this.ad.loading;
        console.log(this.ad.loading);
      }
      if(routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel ||
    routerEvent instanceof  NavigationEnd){
        this.ad.loading = false;
        this.loading = this.ad.loading;
        console.log(this.loading);
      }

    }
    );



  }
  ngOnInit(){
  //  window.onscroll = function() {scrollFunction()};

    /*function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    let headerclasses=document.getElementById("header").className;
    console.log(headerclasses);
    let isboxshadow = headerclasses.search('boxshadow');
    var bar = document.getElementsByClassName("bar");
    var barclasses = bar[0].className;

    if( barclasses.includes("yellow")){
    console.log("yellow");
    for (let i=0; i<bar.length; i++ ){
      bar[i].className = bar[i].className.replace(/\byellow\b/g, "black")
    }}
    var header = document.getElementById("header");
    var a = header.getElementsByTagName("a");
    var aclasses = a[0].className;
    if(aclasses.includes("liacolor")){
      for (let i=0; i<a.length; i++ ){
        a[i].className = a[i].className.replace(/\bliacolor\b/g, "blackli ");
      }}

    console.log(isboxshadow);
        if(isboxshadow == -1 ){
    console.log('yes');
          document.getElementById("header").className += " boxshadow";
    document.getElementById("nav").className=document.getElementById("nav").className.replace(/\bnav1\b/g, "nav2");
    document.getElementById("logo").className=document.getElementById("logo").className.replace(/\bnodisplay\b/g, "display");
    }
     } else {
        bar = document.getElementsByClassName("bar");
        barclasses = bar[0].className;

       if(barclasses.includes("yellow")){}else{

       for (let i=0; i<bar.length; i++ ){
         bar[i].className += " yellow"
       }}
       var header = document.getElementById("header");
       var a = header.getElementsByTagName("a");
       var aclasses = a[0].className;
       if(aclasses.includes("liacolor")){}else{
         for (let i=0; i<a.length; i++ ){
           a[i].className += " liacolor";
           //a[i].className.replace(/\bliacolor\b/g, "liacolor-black");
         }}


      document.getElementById("header").className = "";
      document.getElementById("nav").className=document.getElementById("nav").className.replace(/\bnav2\b/g, "nav1");


      document.getElementById("logo").className=document.getElementById("logo").className.replace(/\bdisplay\b/g, "nodisplay");


      }
    }

    const displayornot = ()=>{
      console.log('displayornot');
    let  bigscreennav = document.getElementById('bigscreennav');
    let  dropdown = document.getElementById('dropdown').className;
    let  dropdowngan = document.getElementById('dropdown');

    let isdropdown = dropdown.includes("nodisplay");
    console.log(isdropdown);
      if(isdropdown){
        console.log(dropdown);
        document.getElementById('dropdown').className = document.getElementById('dropdown').className.replace(/\bnodisplay\b/g, "display");
      }else{
        console.log("falseeee");
      dropdowngan.className = dropdowngan.className.replace(/\bdisplay\b/g, "nodisplay");
      }
    } */

this.registerform =  this.fb.group({
  'firstname': '',

})
  }

  ngOnChanges(){}


}
