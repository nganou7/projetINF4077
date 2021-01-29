import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.page.html',
  styleUrls: ['./mappage.page.scss'],
})
export class MappagePage implements OnInit {
	map: any;
@ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
infoWindows: any = [];

markers: any = [
     {
        title: "nganou",
        latitude: "3.868987",
        longitude: "11.521334"
    },
    {
        title: "DOGMO",
        latitude: " 4.042941",
        longitude: "9.706203"
    },
    {
        title: "Walter",
        latitude: "5.47309",
        longitude: "10.44558"
    },
    {
        title: "Warel",
        latitude: "5.475808 ",
        longitude: "10.421557"
    },
    {
        title: "Francis",
        latitude: "5.489471",
        longitude: "10.405279"
    },
    {
        title: "Kabrel",
        latitude: "9.30707",
        longitude: "13.393453"
    }
  ];
  constructor() { 
 
    }


 ionViewDidEnter() {
    this.showMap();
  }


addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }


////////////
addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                              '<ion-button id="navigate">Navigate</ion-button>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log('navigate button clicked!');
          // code to navigate using google maps app
          window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude);
        });
      });

    });
    this.infoWindows.push(infoWindow);
  }

///////////

 closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(4.612552,13.153581);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  ngOnInit() {
    
  }

}
