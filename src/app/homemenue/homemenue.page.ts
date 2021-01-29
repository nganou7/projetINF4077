import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-homemenue',
  templateUrl: './homemenue.page.html',
  styleUrls: ['./homemenue.page.scss'],
})
export class HomemenuePage implements OnInit {

  constructor(public navCtrl: NavController,private apiservice:ApiserviceService,private storage:Storage) { }

  ngOnInit() {
    this.storage.get('email').then((val) => {
      console.log('Your age is', val);
    });
  }

  //https://www.easysendsms.com/http-api
  //paser a la page login
  gopage(page){
    this.navCtrl.navigateForward(page);
  }
  sendsmssos(number){
    //sendSms
    this.storage.get('numerourgence').then((val) => {
      this.apiservice.sendSms(val)
        .subscribe(resp=>{
          
          alert("Sos envoyer!!!");
         
        },error => {
          alert("Sos envoyer!!!");
        });

    });
    
  }



}
