import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { FtpComponent } from './ftp/ftp.component';
import {LoginComponent} from './authentication/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [

{path:'login', component:LoginComponent},

{path:'dashboard', component:DashboardComponent,children: [
  {  
    path: 'ftp', component: FtpComponent,
    outlet: 'homeOutlet' 
  
},

{
  path: 'transaction', component: TransactionComponent,
    outlet: 'homeOutlet' 


}
 ]},



{path:'', redirectTo: '/dashboard', pathMatch:'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
