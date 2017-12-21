import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { Storage } from '@ionic/storage'
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
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
  ] //deze array wordt gebruikt om de stampcard te initialiseren

  public curStamp = []; //Deze array loopt altijd synchroon met de localstorage

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private barcode: BarcodeScanner
  ) {
    //zet de stempelkaart in de array als er nog geen is, update anders curStamp met localstorage
    storage.get('stampcard').then((kaart) => {
      if (kaart === null || kaart === undefined) {
        //geen stempelkaart gevonden in de local storage, nieuwe toevoegen
        storage.set('stampcard', this.stampCard);
        this.curStamp = this.stampCard;
      } else  
        this.curStamp = kaart; //kaart uit de localstorage
    });
  }

  //clear localstorage
  clearStorage() {
    console.log("CLEAR");
    this.storage.clear();
  }

  //scan qr-code
  scan() {
    this.barcode.scan().then((barcodeData) => {
      this.checkValue(barcodeData.text);  //roep checkValue aan op het resultaat van de scan
    }, (err) => {
      // error
      alert(err);
    });
  }


  //verandert de stempel state van de gescande stad in true
  checkValue(scanResult) {
    this.storage.get('stampcard').then((kaart) => {
      for (var i in kaart) {
        if (kaart[i].name === scanResult) {//check of de scan overeenkomt met een stad in de stempelkaart
          kaart[i].value = true;//set de value
          this.curStamp = kaart;//update curStamp
          this.storage.set('stampcard', kaart);//update localstorage zodat deze gelijk is aan curStamp
        }
      }
    });
  }
}