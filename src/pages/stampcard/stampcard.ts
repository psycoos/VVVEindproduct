import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StampcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stampcard',
  templateUrl: 'stampcard.html',
})
export class StampcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampcardPage');
  }

}
