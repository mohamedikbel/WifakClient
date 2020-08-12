
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from,of } from 'rxjs';
import { API_URLS} from '../../../config/url.config'
import {Ftp} from '../model/ftp'

@Injectable({
 providedIn:'root'
})
export class FtpService{
    constructor(private http:HttpClient){


    }


importCom(f:Ftp):Observable<any>{
     
    var formData: any = new FormData();
    formData.append("ServerName", f.ServerName);
    formData.append("UserName",f.UserName);
    formData.append("Passwrd", f.Passwrd);
    formData.append("port",f.port);


    return this.http.post(API_URLS.CompConF_Url,formData);
    }






}