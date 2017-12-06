import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ViewChild } from '@angular/core/src/metadata/di';
// import { ElementRef } from '@angular/core/src/linker/element_ref';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController) {
    
      }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    // location - lat long
    const location = new google.maps.LatLng(53.164164, 5.781754);

    // Map options
    const options = {
      center: location,
      zoom: 10,
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

  cities = [
    { id: 1, name: "Leeuwarden", stamped: true, checked: "leeuwarden/leeuwarden_2.svg", unchecked: "leeuwarden/leeuwarden_1.svg"},
    { id: 2, name: "Sloten", stamped: false, checked: "sloten/sloten_2.svg", unchecked: "sloten/sloten_1.svg"},
    { id: 3, name: "IJlst", stamped: false, checked: "ijlst/ijlst_2.svg", unchecked: "ijlst/ijlst_1.svg"},
    { id: 4, name: "Sneek", stamped: true, checked: "sneek/sneek_2.svg", unchecked: "sneek/sneek_1.svg"},
    { id: 5, name: "Stavoren", stamped: false, checked: "stavoren/stavoren_2.svg", unchecked: "stavoren/stavoren_1.svg"},
    { id: 6, name: "Hindeloopen", stamped: true, checked: "hindeloopen/hindeloopen_2.svg", unchecked: "hindeloopen/hindeloopen_1.svg"},
    { id: 7, name: "Workum", stamped: false, checked: "workum/workum_2.svg", unchecked: "workum/workum_1.svg"},
    { id: 8, name: "Bolsward", stamped: true, checked: "bolsward/bolsward_2.svg", unchecked: "bolsward/bolsward_1.svg"},
    { id: 9, name: "Harlingen", stamped: false, checked: "harlingen/harlingen_2.svg", unchecked: "harlingen/harlingen_1.svg"},
    { id: 10, name: "Franeker", stamped: false, checked: "franeker/franeker_2.svg", unchecked: "franeker/franeker_1.svg"},
    { id: 11, name: "Dokkum", stamped: true, checked: "dokkum/dokkum_2.svg", unchecked: "dokkum/dokkum_1.svg"}
  ];  

}
