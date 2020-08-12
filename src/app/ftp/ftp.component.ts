import { Component, OnInit, Input } from '@angular/core';
import { FtpService } from './shared/service/ftp.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgProgress } from '@ngx-progressbar/core';

import { Ftp } from './shared/model/ftp';

@Component({
  selector: 'app-ftp',
  templateUrl: './ftp.component.html',
  styleUrls: ['./ftp.component.css']
})
export class FtpComponent implements OnInit {

  startedClass = false;
  endedClass = false;
  preventAbuse = false;

  options = {
    minimum: 0.08,
    maximum: 1,
    ease: 'linear',
    speed: 200,
    trickleSpeed: 300,
    meteor: true,
    spinner: true,
    spinnerPosition: 'right',
    direction: 'leftToRightIncreased',
    color: 'blue',
    thick: true
  };


  public ftpForm: FormGroup;



  constructor(public progress: NgProgress,private ftpservice:FtpService , private fb :FormBuilder) { 
   this.ftpForm =this.fb.group({
    ServerName :'wifakbntest.ueuo.com',
    UserName :'',
    Passwrd:'',
    port :'21'



   });


  }

  ngOnInit() {
    this.progress.started.subscribe(() => {

      this.startedClass = true;
      setTimeout(() => {
        this.startedClass = false;
      }, 800);
    });

    this.progress.ended.subscribe(() => {

      this.endedClass = true;
      setTimeout(() => {
        this.endedClass = false;
      }, 800);
    });

  }


 
  loadData(){
    
    const f = this.ftpForm.value; 
    
   let ft:Ftp =new Ftp(f.ServerName,f.UserName,f.Passwrd,f.port);
   console.log(ft)
   this.ftpservice.importCom(ft).subscribe(     
    data =>{console.log('an error'); setTimeout(() => {
      this.preventAbuse = false;
    }, 800);} 
    
    )


  }


}
