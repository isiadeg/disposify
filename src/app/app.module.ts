import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RoutingModuleModule} from './routing-module/routing-module.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {RequestinterceptService} from './requestintercept.service'
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofileidComponent } from './userprofileid/userprofileid.component';
import { RegistrationapprovalsComponent } from './registrationapprovals/registrationapprovals.component';
import { RegistrationapprovalsidComponent } from './registrationapprovalsid/registrationapprovalsid.component';
import { NbspPipe } from './nbsp.pipe';
import { UserareaComponent } from './userarea/userarea.component';
import { TestingComponent } from './testing/testing.component';
import { ServiceregisterComponent } from './serviceregister/serviceregister.component';
import { CollectorComponent } from './collector/collector.component';
import { CollectorinformationComponent } from './collectorinformation/collectorinformation.component';
import { PackageregComponent } from './packagereg/packagereg.component';
import { FacebookuserComponent } from './facebookuser/facebookuser.component';
import { PackageviewComponent } from './packageview/packageview.component';
import {GoogleComponent} from './google/google.component';
import { MysubscriptionComponent } from './mysubscription/mysubscription.component';
import { SubscriptionviewComponent } from './subscriptionview/subscriptionview.component';

@NgModule({
  declarations: [
    AppComponent,
PagenotfoundComponent,


    IndexComponent,


    UserComponent,


    LoginComponent,


    UserprofileComponent,


    UserprofileidComponent,


    RegistrationapprovalsComponent,


    RegistrationapprovalsidComponent,


    NbspPipe,

    UserareaComponent,

    TestingComponent,

    ServiceregisterComponent,

    CollectorComponent,

    CollectorinformationComponent,

    PackageregComponent,

    FacebookuserComponent,

    PackageviewComponent,
    GoogleComponent,
    MysubscriptionComponent,
    SubscriptionviewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModuleModule,
    ReactiveFormsModule

  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: RequestinterceptService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
