import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient,private storage:Storage) { }
  registerpatient (datapateint) {
    console.log(datapateint);
    return this.http.post("register", datapateint );

  }

  getAllMedecin(){
    let url="https://tpmasterun.herokuapp.com/personnes/search/byRole?role=medecin";
    return this.http.get(url);
  }

  getAllmesure(url){
    return this.http.get(url);
  }

  async getAllmesureofuser(){
    let url="";
    await this.storage.get('mesure').then((val) => {
      url=val;
    });
    alert(url);
    return this.http.get(url);
  }

  // async getlink(){

  //   this.storage.get('mesure').then((val) => {
  //     return val;
  //   });
  // }
  Registeruser(dataUser){
    console.log(dataUser);
    return this.http.post("https://tpmasterun.herokuapp.com/personnes",dataUser);
 
  }
  login(user,password){
    let url="https://tpmasterun.herokuapp.com/personnes/search/byUser?email="+user+"&password="+password;
    return this.http.get(url);
  }
  
  sendSms(numer){
    
    let url="https://www.easysendsms.com/sms/bulksms-api/bulksms-api?username=ataltalo2021&password=esm76376&from=Test&to="+numer+"&text=Hello%20world&type=0";
    return this.http.get(url);
  }
  addMesure (mesure) {
    console.log(mesure);
    return this.http.post('https://tpmasterun.herokuapp.com/mesures', mesure);
  }
Saveiduserstorage(email,pass,urgence,linkmesure,linkpersone){
  this.storage.set("email",email);
  this.storage.set("passord",pass);
  this.storage.set("mesure",linkmesure);
  this.storage.set("linkpersone",linkpersone);
  this.storage.set("numerourgence",urgence);
}
getinfostorage(){
  this.storage.get('email').then((val) => {
    console.log('Your age is', val);
  });
}
}
