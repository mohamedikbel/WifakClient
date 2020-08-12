import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppService} from './authentication/shared/app.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WifakBankClient';

  constructor(private appService:AppService, private router:Router){}
  ngOnInit() {
    if(!this.appService.athentificated) {

      this.router.navigateByUrl('/login');
    }
    
    else { this.router.navigateByUrl('/dashbord');                           }

}


}
