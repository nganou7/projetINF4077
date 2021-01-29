import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-listmedecin',
  templateUrl: './listmedecin.page.html',
  styleUrls: ['./listmedecin.page.scss'],
})
export class ListmedecinPage implements OnInit {
  public medecintableau:any=[];
  tab:any=[];
  public pat: any=[];
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {

    this.medecintableau=this.apiservice.getAllMedecin().subscribe(data=>{
      this.tab=data;
        this.tab._embedded.personnes.forEach(c=>{
            this.pat.push(c);
        });
      console.warn(data);
    })
  }

}
