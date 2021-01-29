import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {AlertController, LoadingController, NavController} from '@ionic/angular'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user:any=[];
  tab:any=[];
  public pat: any=[];
  constructor(public navCtrl: NavController,private apiservice:ApiserviceService) { }

  ngOnInit() {
  }
  loginuser(user) {

    this.user=this.apiservice.login(user['username'],user['password']).subscribe(data=>{
      this.tab=data;
        
        if(this.tab._embedded.personnes.length==1){
          
          //console.log(this.tab._embedded.personnes[0]._links.mesure.href);
          this.apiservice.Saveiduserstorage(this.tab._embedded.personnes[0].email,this.tab._embedded.personnes[0].password,this.tab._embedded.personnes[0].numerourgence,this.tab._embedded.personnes[0]._links.mesure.href,this.tab._embedded.personnes[0]._links.personne.href);
          this.navCtrl.navigateForward("homemenue");
        }else{
          alert("Probleeme de login");
        }
      //console.warn(this.pat.length);
    })

    
  }

}
