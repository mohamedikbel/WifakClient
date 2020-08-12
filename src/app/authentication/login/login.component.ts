import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,        ReactiveFormsModule} from '@angular/forms';
import { AppService} from '../shared/app.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public loginForm: FormGroup;

  constructor(private fb :FormBuilder,private appService:AppService,private router:Router) { 
  





  }

  credantials ={

    username: '' ,

    password :''

}

  ngOnInit() {
    this.loginForm =this.fb.group({

      username:'',
      password :''
    });
  }

  login(){

    const f=this.loginForm.value;

    this.credantials.username= f.username;
    this.credantials.password= f.password;
    sessionStorage.setItem('loggedUser',f.username);
    console.log(this.credantials);
    this.appService.athenticate(this.credantials,()=>{
      
     

      this.router.navigateByUrl('/dashboard/(homeOutlet:transaction)');
        });






  }

}
