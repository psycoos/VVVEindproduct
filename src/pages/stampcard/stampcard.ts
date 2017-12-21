import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsPage } from '../maps/maps';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-stampcard',
  templateUrl: 'stampcard.html',
})

export class StampcardPage {
  
  tab1Root = MapsPage;
  tab2Root = HomePage;
  tab3Root = UserPage;

  public stampcarousel = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    private iab: InAppBrowser
  ) {

    //zet de stempelkaart in de array als er nog geen is, update anders curStamp met localstorage
    storage.get('stampcard').then((kaart) => { 
        this.stampcarousel = kaart; //kaart uit de localstorage
    });
    
  }
  openhim(){
    const browser = this.iab.create('https://www.google.com/maps/dir/?api=1&destination=Leeuwarden&travelmode=walking');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StampcardPage');
  }

}
