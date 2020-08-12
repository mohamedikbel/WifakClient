import { Component, OnInit } from '@angular/core';
import { TransactionService } from './shared/service/transaction.service';
import { Transaction } from './shared/model/transaction';
import {ButtonModule} from 'primeng/button';



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions :Transaction[];
  constructor(private transactionMockService:TransactionService) { }

  cols: any[];

  ngOnInit() {
    this.loadTransaction() ; 

    this.cols = [
      { field: 'compconf', header: 'Compconf' },

      { field: 'cardholdernumber', header: 'Cardholder Number' },
      { field: 'transactioncode', header: 'Transaction code' },
      { field: 'transactiondate', header: 'Transaction date' },
      { field: 'authorizationcode', header: 'Authorization code' },
      { field: 'acquirerbankidentification', header: 'Acquirer bank identification' },
      { field: 'acquirerreferencenumber', header: 'Acquirer reference number' }


      
  ];
  
  
  }

    loadTransaction(){

      this.transactionMockService.getTransactions().subscribe(
        
        data=> {this.transactions =data },
        error =>{console.log('an error')}   
        
        


      );
    }

}
