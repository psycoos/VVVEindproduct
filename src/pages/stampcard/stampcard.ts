import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsPage } from '../maps/maps';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

@IonicPage()
@Component({
  selector: 'page-stampcard',
  templateUrl: 'stampcard.html',
})
export class StampcardPage {

  tab1Root = MapsPage;
  tab2Root = HomePage;
  tab3Root = UserPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  stampCard = [
    {
      name: "Leeuwarden",
      value: false,
      trueimage: "leeuwarden/leeuwarden_2.svg",
      falseimage: "leeuwarden/leeuwarden_1.svg"
    },
    {
      name: "Sneek",
      value: false,
      trueimage: "sneek/sneek_2.svg",
      falseimage: "sneek/sneek_1.svg"
    },
    {
      name: "Ijlst",
      value: false,
      trueimage: "ijlst/ijlst_2.svg",
      falseimage: "ijlst/ijlst_1.svg"
    },
    {
      name: "Sloten",
      value: false,
      trueimage: "sloten/sloten_2.svg",
      falseimage: "sloten/sloten_1.svg"
    }
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampcardPage');
  }

}
