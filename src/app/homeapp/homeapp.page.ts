import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.page.html',
  styleUrls: ['./homeapp.page.scss'],
})
export class HomeappPage implements OnInit {

  constructor(public navCtrl: NavController,private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
    //paser a la page login
    gopage(page){
      this.navCtrl.navigateForward(page);
    }
  

}
