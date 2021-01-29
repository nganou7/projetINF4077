import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import {AlertController, LoadingController, NavController} from '@ionic/angular'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  result:number=0;
  constructor(private apiservice:ApiserviceService,private loadingCtrl:LoadingController,private router:Router) { }

  ngOnInit() {
  }
  onregister(userdata){
  
    userdata['role']="patient";
    userdata['etat']="saint";
    console.log(userdata);
    this.apiservice.Registeruser(userdata)
        .subscribe(resp=>{
          //let jwtToken=resp.headers.get('Authorization');
          //console.log(jwtToken);
         // this.apiservice.saveToken(jwtToken);
          //let jwtok=this.apiservice.loadToken();
          alert("enregistrement terminer");
         this.router.navigateByUrl('/login');
        },error => {
          this.result=1;
        });


  }

}
