import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import{IndexComponent} from '../index/index.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {LoginComponent} from '../login/login.component';
import {AdminResolverService} from '../admin-resolver.service';
import {RegistrationapprResolverService} from '../registrationappr-resolver.service';
import {AdminGuardGuard} from '../admin-guard.guard';
import {RegistrationapprovalsComponent} from '../registrationapprovals/registrationapprovals.component';
import {RegistrationapprovalsidComponent} from '../registrationapprovalsid/registrationapprovalsid.component';
import {UserprofileService} from '../userprofile.service';
import {UserComponent} from '../user/user.component';
import {UserprofileComponent} from '../userprofile/userprofile.component'
import {UserprofileidComponent} from '../userprofileid/userprofileid.component'
import {DetailsresolveService} from '../detailsresolve.service'
import {UserareaComponent} from '../userarea/userarea.component';
import {VendorGuard} from '../vendor.guard';
import {TestingComponent} from '../testing/testing.component';
import {VendordailyService} from '../vendordaily.service';
import {CollectorGuard} from '../collector.guard';
import {CollectorinformationComponent} from '../collectorinformation/collectorinformation.component';
import {CollectorService} from '../collector.service';
import {CollectorComponent} from '../collector/collector.component';
import {CustomerService} from '../customer.service';
import {PackageregComponent} from '../packagereg/packagereg.component';
import {ServiceregisterComponent} from '../serviceregister/serviceregister.component';
import {FacebookuserComponent} from '../facebookuser/facebookuser.component';
import {GoogleComponent} from '../google/google.component';
import{PackageserviceService } from '../google/packageservice.service';
import { MysubscriptionComponent } from "../mysubscription/mysubscription.component";
import { MysubscriptionService } from "../mysubscription.service";
import {SubscriptionviewService} from "../subscriptionview.service";
import {SubscriptionviewComponent} from "../subscriptionview/subscriptionview.component";

 const routes=[
  {path: 'index', component: IndexComponent
},
{path: 'testing', component: TestingComponent
},
{path:'login', component: LoginComponent},
{path: 'facebookuser', component: FacebookuserComponent},
/* {path: 'admin', component: AdminComponent,  canActivate: [AdminGuardGuard],
canActivateChild: [AdminGuardGuard],
 children: [
{
  path: 'registrationapprovals', component: RegistrationapprovalsComponent, resolve:{resolveadmin: AdminResolverService}
},
{
  path: 'users', component: UserComponent, resolve:{userprofile: UserprofileService}
},
{
  path: 'report', component: ReportComponent, resolve:{report: ReportService},
},
{
  path: 'configure', component: ConfigurebankComponent
},
{
  path: 'configuremycharges', component: MychargesComponent
},

{
  path: 'user/:id', component: UserprofileComponent, resolve:{useriprofile: DetailsresolveService},
children:[


    {
      path: 'userdetails', component: UserprofileidComponent
    },
    {
      path: 'dailytransaction/:id', component: DailytransactionComponent, resolve:{daily: DailytransactionService},
    },
    {
      path: 'transactions/:id', component: TransactionsComponent, resolve:{transactions: TransactionsService},
    },
        {path: ':id', resolve:{remmiteddetails: RemmitedresolveService }, children:[
          {
            path: 'moneyremmited', component: MoneyremittedComponent
          },
          //hildren
          //c
          {
            path: 'moneyremmitedadd', component: MoneyremittedaddComponent
          },
          {
            path: 'moneyallocated/:id', component: MoneyallocatedComponent, resolve:{allocated: AllocatedService}
          },
          {
            path: 'moneyallocatedadd/:id', component: MoneyallocatedaddComponent
          },*/
        /*  {
            path: 'moneyremmited/edit', component: MoneyremittededitComponent
          },*//*
          {
            path: '',  redirectTo: 'moneyremmited', pathMatch: 'full'
          }
        ]},

    {
      path: '',  redirectTo: 'userdetails', pathMatch: 'full'
    }


]
},
{
path: 'registrationapprovalsid/:id', component: RegistrationapprovalsidComponent, resolve:{resolveregistration: RegistrationapprResolverService}
},
{path: '', redirectTo: '/admin/users', pathMatch: 'full'},
]}, */
{path: 'collector/:id', component: CollectorComponent, /*resolve:{collector: CollectorService},*//*resolve:{deposit: DepositService},*/  canActivate: [CollectorGuard],
canActivateChild: [CollectorGuard],
 children: [
   {
       path: 'collectorinformation', component: CollectorinformationComponent, resolve:{customer: CustomerService}
     },

     {
         path: 'businessreg', component: ServiceregisterComponent
       },
       {
           path: 'packagereg', component: PackageregComponent
         },

     {path: '', redirectTo: 'collectorinformation', pathMatch: 'full'},

]},
{path: 'user/:id', component: UserareaComponent, /*resolve:{customer: CustomerService},*//*resolve:{deposit: DepositService},*/  canActivate: [VendorGuard],
canActivateChild: [VendorGuard],
 children: [

  {
      path: 'information', component: GoogleComponent, resolve:{packaged: PackageserviceService}
    },
    {
        path: 'mysubscription', component: MysubscriptionComponent, resolve:{mysubscription: MysubscriptionService},
        children: [
        {  path: 'subscriptionview/:pid/:id', component: SubscriptionviewComponent /*resolve:{subscriptionview: SubscriptionviewService}*/
      }]
      },
    {path: '', redirectTo: 'information', pathMatch: 'full'},


]},

{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: '**', component: PagenotfoundComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class RoutingModuleModule { }
