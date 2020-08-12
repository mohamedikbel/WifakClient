import { NgModule } from '@angular/core';
import { FtpComponent } from './ftp.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FtpComponent,




    ],
    imports:[    NgProgressModule.forRoot(),
        NgProgressHttpClientModule,
        ReactiveFormsModule,
    FormsModule  ,]
})


    export class FtpModule { }