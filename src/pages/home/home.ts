import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { Storage } from '@ionic/storage'
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { QrCodeProvider } from '../../providers/qr-code/qr-code'


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
    },
  ]

  public curStamp = [];

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private barcode: BarcodeScanner,
    private qrcodeProvider: QrCodeProvider,
  ) {
    storage.get('stampcard').then((kaart) => {
      if (kaart === null || kaart === undefined) {
        //geen stempelkaart gevonden in de local storage, nieuwe toevoegen
        storage.set('stampcard', this.stampCard);
        this.curStamp = this.stampCard;
      } else  
        this.curStamp = kaart; //Kaart uit de local storage
    });
  }

  //Clear storage
  clearStorage() {
    console.log("CLEAR");
    this.storage.clear();
  }

  scan() {
    this.barcode.scan().then((barcodeData) => {
      this.checkValue(barcodeData.text);
    }, (err) => {
      // error
      alert(err);
    });
  }

  checkValue(scanResult) {
    this.storage.get('stampcard').then((kaart) => {
      for (var i in kaart) {
        if (kaart[i].name === scanResult) {
          kaart[i].value = true;
          this.curStamp = kaart;
          this.storage.set('stampcard', kaart);
        }
      }
    });
  }

  latenzien() {
  //  this.dingendoen("Leeuwarden");
  }

  ionViewDidLoad() {}
}