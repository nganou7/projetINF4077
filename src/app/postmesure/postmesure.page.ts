import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import {Mesure} from '../Mesure';
import {AlertController, LoadingController, NavController} from '@ionic/angular'; 
@Component({
  selector: 'app-postmesure',
  templateUrl: './postmesure.page.html',
  styleUrls: ['./postmesure.page.scss'],
})
export class PostmesurePage implements OnInit {

  constructor(private apiservice:ApiserviceService,private storage:Storage,private loadingCtrl:LoadingController,private router:Router) { }

  ngOnInit() {
  }

  postmesure(mesure:Mesure){
    this.storage.get('linkpersone').then((val) => {
      mesure.personne=val;
    });
   
    this.apiservice.addMesure(mesure)
    .subscribe(data=>{
     alert("merci ajouter");
      
    },error1 => {
    console.log('echecttttttttttttttttttttttttt');
    alert("ko save");
    });

  }
}
