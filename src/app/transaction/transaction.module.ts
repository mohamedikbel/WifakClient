import { NgModule } from '@angular/core';
import { TransactionComponent } from './transaction.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        TransactionComponent,


    
    ],
    imports:[ BrowserModule,
        BrowserAnimationsModule,
        TableModule,]


})


    export class TransactionModule { }