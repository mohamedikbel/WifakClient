import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [

        LoginComponent,


    ],

    imports: [ ReactiveFormsModule,
        FormsModule  ,]})
    export class AuthenticationModule { }