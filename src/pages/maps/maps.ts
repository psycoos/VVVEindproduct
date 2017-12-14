import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;
var currentLocationMarker;


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.showMap();

    this.geolocation.getCurrentPosition().then((resp) => {
       this.createMarker(new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude), this.map);

       console.log("1");
       console.log(resp.coords.latitude);
       
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      //data.coords
      console.log("2");
      console.log(data.coords.latitude, data.coords.longitude);

      this.updateMarker(data.coords.latitude, data.coords.longitude);
     });  
  }

  showMap() {
    // location - lat long
    const location = new google.maps.LatLng(53.1980506, 5.7919859);

    //location for every city
    const Leeuwarden = new google.maps.LatLng(53.1980506, 5.7919859);
    const Dokkum = new google.maps.LatLng(53.3271086, 5.9986493);
    const Sloten = new google.maps.LatLng(52.8947695, 5.6456006);
    const IJlst = new google.maps.LatLng(53.0110137, 5.6218303);
    const Sneek = new google.maps.LatLng(53.0322788, 5.6632031);
    const Stavoren = new google.maps.LatLng(52.8865688,5.3579681);
    const Hindeloopen = new google.maps.LatLng(52.9424502, 5.4024287);
    const Workum = new google.maps.LatLng(52.9794418, 5.4438464);
    const Bolsward = new google.maps.LatLng(53.0618983, 5.5228519);
    const Harlingen = new google.maps.LatLng(53.1747075, 5.4149199);
    const Franeker = new google.maps.LatLng(53.185715, 5.5455836);
    
    
    // Map options
    const options = {
      center: location,
      zoom: 12,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options)

    this.addMarker(Leeuwarden, this.map);
    this.addMarker(Dokkum, this.map);
    this.addMarker(Sloten, this.map);
    this.addMarker(IJlst, this.map);
    this.addMarker(Sneek, this.map);
    this.addMarker(Stavoren, this.map);
    this.addMarker(Hindeloopen, this.map);
    this.addMarker(Workum, this.map);
    this.addMarker(Bolsward, this.map);
    this.addMarker(Harlingen, this.map);
    this.addMarker(Franeker, this.map);
  }

  addMarker (position, map) {
    new google.maps.Marker({
      position,
      map,
    })
  }

  createMarker (position, map) {
    currentLocationMarker = new google.maps.Marker({
      // icon: {
      //   path: google.maps.SymbolPath.CIRCLE,
      //   scale: 5
      // },
      position,
      map,
    })
  } 

  updateMarker(lat, lng) {
    var newlocation = new google.maps.LatLng(lat, lng);
    currentLocationMarker.setPosition(newlocation);
  }
}
