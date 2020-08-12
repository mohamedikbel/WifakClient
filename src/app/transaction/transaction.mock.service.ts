import { Transaction } from './shared/model/transaction'
import { Injectable } from '@angular/core';


@Injectable()
export class TransactionMockService{


  private  TRANSACTIONS: Transaction[] = [];
    
 

    constructor (){

      let t1 :Transaction = new Transaction("5f1a95a8809370192f427ed0",
 "0120958392",
"000512",
"000081",
"4598102000165088",
"N",
"I",
"D",
"05",
"000005000",
"0222",
"210720",
"200720",
"350041",
"210720",
"4814",
"00147",
"2",
null,
"74550430203012030815128",
"",
"TUNISE TELECOM",
"23/07/2020",
"204",
 "123456"         )

 this.TRANSACTIONS.push(t1);

    }

    public getTRANSACTIONS(): Transaction[] {
        return this.TRANSACTIONS;
    }
    public setTRANSACTIONS(value: Transaction[]) {
        this.TRANSACTIONS = value;
    }

}