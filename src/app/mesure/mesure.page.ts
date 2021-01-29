import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-mesure',
  templateUrl: './mesure.page.html',
  styleUrls: ['./mesure.page.scss'],
})
export class MesurePage implements OnInit {
  public mesuretableau:any=[];
  tab:any=[];
  public pat: any=[];
  constructor(private apiservice:ApiserviceService,private storage:Storage) { }

  ngOnInit() {
    this.getAllmesureofuser();
    // this.mesuretableau=this.apiservice.getAllmesureofuser().subscribe(data=>{
    //   this.tab=data;
    //     this.tab._embedded.personnes.forEach(c=>{
    //         this.pat.push(c);
    //     });
    //   console.warn(data);
    // })

  }
  async getAllmesureofuser(){
    let url="";
    await this.storage.get('mesure').then((val) => {
      url=val;
    });

//alert(url);


    this.mesuretableau=this.apiservice.getAllmesure(url).subscribe(data=>{
      this.tab=data;
        this.tab._embedded.mesures.forEach(c=>{
            this.pat.push(c);
        });
        //alert("ok");
      console.warn(data);
    })
 
  }

}
