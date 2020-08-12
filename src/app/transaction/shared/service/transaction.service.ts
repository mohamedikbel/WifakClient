
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS} from '../../../config/url.config'

@Injectable({

    providedIn:'root'


})
export class TransactionService{
    constructor(private http:HttpClient){


    }



getTransactions():Observable<any>{

return this.http.get(API_URLS.TRANSACTIONS_URL);
}




}