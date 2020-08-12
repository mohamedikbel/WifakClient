import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  }from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TransactionMockService} from './transaction/transaction.mock.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';
import {TableModule} from 'primeng/table';
import { DashboardModule } from './dashboard/dashboard.module';
import { XhrInterceptor } from './authentication/xhr.interceptor';
import {  AuthenticationModule } from './authentication/authentication.module';
import {  MenuModule } from './menu/menu.module';
import {  FtpModule } from './ftp/ftp.module';
import { TransactionModule } from './transaction/transaction.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AuthenticationModule,
    FtpModule,
    TransactionModule,
    DashboardModule,
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule  ,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule



  ],
  providers: [TransactionMockService,
 {provide:HTTP_INTERCEPTORS,useClass:XhrInterceptor,multi:true}, CookieService, ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
