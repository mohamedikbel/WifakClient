import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {API_URLS } from '../../config/url.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({

    providedIn:'root'


})
export class AppService{


constructor(private http:HttpClient,private cookieService: CookieService,
    ){}

athentificated:boolean=false;

athenticate(credantials,callback){

    if(credantials)
{          const token = btoa(credantials.username+ ':' +credantials.password);
this.cookieService.set('token', token);



this.http.get(API_URLS.USr_URL).subscribe(
    response => {
        if (response && response['name']) {
          console.log(response);
    this.athentificated=true
    sessionStorage.setItem('islogged', "true");


}else     this.athentificated=false
          sessionStorage.setItem('islogged', "false");

return callback && callback() ;

});
            



}









}
logout(callback){
    this.athentificated = false;
    return callback && callback();
  }

}