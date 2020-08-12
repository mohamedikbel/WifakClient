import { Component, OnInit } from '@angular/core';
import { AppService } from '../../authentication/shared/app.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService:AppService,private router:Router,private cookieService: CookieService) { }
 
     userDisplayName = '';

 
     pic="" ;

  ngOnInit() {
       this.userDisplayName = sessionStorage.getItem('loggedUser');
       console.log(sessionStorage.getItem('loggedUser'))
       let ca: string = "2";
switch (this.userDisplayName) {
  case "myriam":
       this.pic="https://i.imgur.com/7eCKG0O.jpg";
    break;

  case "nihed":
    this.pic="https://i.imgur.com/M4ylSId.jpg";

    break;

  default:
    console.log("default");
}

console.log(this.pic);
    }
 

  logout(){

    this.appService.logout(()=>{
    
      this.router.navigateByUrl('/login)');
    
    });


  }
}
