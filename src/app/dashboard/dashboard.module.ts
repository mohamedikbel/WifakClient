import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from '../menu/menu.module';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../menu/navbar/navbar.component';
import { SidebarComponent } from '../menu/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DashboardComponent,
        NavbarComponent,
        SidebarComponent,
      


    ],
    
    imports:[MenuModule,RouterModule,
        AppRoutingModule,
]})


    export class DashboardModule { }