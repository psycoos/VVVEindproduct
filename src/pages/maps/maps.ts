import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;


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
      this.addMarker(new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude), this.map);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      //data.coords
     });  
  }

  showMap() {
    // location - lat long
    const location = new google.maps.LatLng(53.164164, 5.781754);

    //location for every city
    const Leeuwarden = new google.maps.LatLng(53.1980506, 5.7919859,21);
    const Dokkum = new google.maps.LatLng(53.3271086, 5.9986493,21);
    const Sloten = new google.maps.LatLng(52.8947695, 5.6456006,21);
    const IJlst = new google.maps.LatLng(53.0110137, 5.6218303,21);
    const Sneek = new google.maps.LatLng(53.0322788, 5.6632035,21);
    const Stavoren = new google.maps.LatLng(52.8865688,5.3579681,21);
    const Hindeloopen = new google.maps.LatLng(52.9424502, 5.4024287,21);
    const Workum = new google.maps.LatLng(52.9794418, 5.4438464,21);
    const Bolsward = new google.maps.LatLng(53.0618983, 5.5228519,21);
    const Harlingen = new google.maps.LatLng(53.1747075, 5.4149199,21);
    const Franeker = new google.maps.LatLng(53.185715, 5.5455836,21);
    
    
    // Map options
    const options = {
      center: location,
      zoom: 9,
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

}
