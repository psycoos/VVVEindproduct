import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { Storage } from '@ionic/storage'
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { stampService } from '../../providers/stamp-service';
import { AlertController, ModalController } from 'ionic-angular';

import { StampcardPage } from '../stampcard/stampcard';

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
      falseimage: "leeuwarden/leeuwarden_1.svg",
      cityimage: "leeuwarden/leeuwarden_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Leeuwarden&travelmode=walking"
    },
    {
      name: "Sneek",
      value: false,
      trueimage: "sneek/sneek_2.svg",
      falseimage: "sneek/sneek_1.svg",
      cityimage: "sneek/sneek_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Sneek&travelmode=walking"
    },
    {
      name: "IJlst",
      value: false,
      trueimage: "ijlst/ijlst_2.svg",
      falseimage: "ijlst/ijlst_1.svg",
      cityimage: "ijlst/ijlst_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=IJlst&travelmode=walking"
    },
    {
      name: "Sloten",
      value: false,
      trueimage: "sloten/sloten_2.svg",
      falseimage: "sloten/sloten_1.svg",
      cityimage: "sloten/sloten_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Sloten&travelmode=walking"
    },
    {
      name: "Bolsward",
      value: false,
      trueimage: "bolsward/bolsward_2.svg",
      falseimage: "bolsward/bolsward_1.svg",
      cityimage: "bolsward/bolsward_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Bolsward&travelmode=walking"
    },
    {
      name: "Dokkum",
      value: false,
      trueimage: "dokkum/dokkum_2.svg",
      falseimage: "dokkum/dokkum_1.svg",
      cityimage: "dokkum/dokkum_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Dokkumt&travelmode=walking"
    },
    {
      name: "Franeker",
      value: false,
      trueimage: "franeker/franeker_2.svg",
      falseimage: "franeker/franeker_1.svg",
      cityimage: "franeker/franeker_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Franeker&travelmode=walking"
    },
    {
      name: "Harlingen",
      value: false,
      trueimage: "harlingen/harlingen_2.svg",
      falseimage: "harlingen/harlingen_1.svg",
      cityimage: "harlingen/harlingen_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Harlingen&travelmode=walking"
    },
    {
      name: "Hindeloopen",
      value: false,
      trueimage: "hindeloopen/hindeloopen_2.svg",
      falseimage: "hindeloopen/hindeloopen_1.svg",
      cityimage: "hindeloopen/hindeloopen_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Hindeloopen&travelmode=walking"
    },
    {
      name: "Stavoren",
      value: false,
      trueimage: "stavoren/stavoren_2.svg",
      falseimage: "stavoren/stavoren_1.svg",
      cityimage: "stavoren/stavoren_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Stavoren&travelmode=walking"
    },
    {
      name: "Workum",
      value: false,
      trueimage: "workum/workum_2.svg",
      falseimage: "workum/workum_1.svg",
      cityimage: "workum/workum_3.jpg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Workum&travelmode=walking"
    }
  ] //deze array wordt gebruikt om de stampcard te initialiseren


  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private barcode: BarcodeScanner,
    private stampService: stampService,
    private alertCtrl: AlertController,
    public modalCtrl : ModalController
  ) {
    //zet de stempelkaart in de array als er nog geen is, update anders curStamp met localstorage
    storage.get('stampcard').then((kaart) => {
      if (kaart === null || kaart === undefined) {
        //geen stempelkaart gevonden in de local storage, nieuwe toevoegen
        storage.set('stampcard', this.stampCard);
        stampService.stamp = this.stampCard;
      } else  
        stampService.stamp = kaart; //kaart uit de localstorage
    });
  }

ionViewDidEnter() {
  this.storage.get('stampcard').then((kaart) => {
    var count = 0;
    for (var i = 0; i < kaart.length; i++) {
        if (kaart[i].value === true) {
            count++;
        }
    }
    if (count == 11) {
      this.alertStampcard();
    }
  });
  }



  alertStampcard() {
    let alert = this.alertCtrl.create({
      title: 'Gefeliciteerd!',
      subTitle: 'Je hebt een volle stempelkaart! Ga naar het dichtsbijzijnde VVV kantoor voor je Elfstedentocht kruisje',
      buttons: ['Oké']
    });
    alert.present();
  }

  //clear localstorage
  clearStorage() {
    console.log("CLEAR");
    this.storage.clear();
  }

  public openModal(){
    var onboardingPage = this.modalCtrl.create('OnboardingPage'); onboardingPage.present();
  }  

  //scan qr-code
  // scan() {
  //   this.barcode.scan().then((barcodeData) => {
  //     this.checkValue(barcodeData.text);  //roep checkValue aan op het resultaat van de scan
  //   }, (err) => {
  //     // error
  //     alert(err);
  //   });
  // }


  // //verandert de stempel state van de gescande stad in true
  // checkValue(scanResult) {
  //   this.storage.get('stampcard').then((kaart) => {
  //     for (var i in kaart) {
  //       if (kaart[i].name === scanResult) {//check of de scan overeenkomt met een stad in de stempelkaart
  //         kaart[i].value = true;//set de value
  //         this.stampService.stamp = kaart;//update curStamp
  //         this.storage.set('stampcard', kaart);//update localstorage zodat deze gelijk is aan curStamp
  //       }
  //     }
  //   });
  // }
}