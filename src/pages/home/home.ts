import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { Storage } from '@ionic/storage'
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { stampService } from '../../providers/stamp-service';



import { StampcardPage } from '../stampcard/stampcard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  
  
  stampCard = [
    {
      name: "Leeuwarden",
      value: false,
      trueimage: "leeuwarden/leeuwarden_2.svg",
      falseimage: "leeuwarden/leeuwarden_1.svg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Leeuwarden&travelmode=walking"
    },
    {
      name: "Sneek",
      value: false,
      trueimage: "sneek/sneek_2.svg",
      falseimage: "sneek/sneek_1.svg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Leeuwarden&travelmode=walking"
    },
    {
      name: "Ijlst",
      value: false,
      trueimage: "ijlst/ijlst_2.svg",
      falseimage: "ijlst/ijlst_1.svg",
      mapsURL: "https://www.google.com/maps/dir/?api=1&destination=Leeuwarden&travelmode=walking"
    },
    {
      name: "Sloten",
      value: false,
      trueimage: "sloten/sloten_2.svg",
      falseimage: "sloten/sloten_1.svg"
    },
    {
      name: "Bolsward",
      value: false,
      trueimage: "bolsward/bolsward_2.svg",
      falseimage: "bolsward/bolsward_1.svg"
    },
    {
      name: "Dokkum",
      value: false,
      trueimage: "dokkum/dokkum_2.svg",
      falseimage: "dokkum/dokkum_1.svg"
    },
    {
      name: "Franeker",
      value: false,
      trueimage: "franeker/franeker_2.svg",
      falseimage: "franeker/franeker_1.svg"
    },
    {
      name: "Harlingen",
      value: false,
      trueimage: "harlingen/harlingen_2.svg",
      falseimage: "harlingen/harlingen_1.svg"
    },
    {
      name: "Hindeloopen",
      value: false,
      trueimage: "hindeloopen/hindeloopen_2.svg",
      falseimage: "hindeloopen/hindeloopen_1.svg"
    },
    {
      name: "Stavoren",
      value: false,
      trueimage: "stavoren/stavoren_2.svg",
      falseimage: "stavoren/stavoren_1.svg"
    },
    {
      name: "Workum",
      value: false,
      trueimage: "workum/workum_2.svg",
      falseimage: "workum/workum_1.svg"
    }
  ] //deze array wordt gebruikt om de stampcard te initialiseren


  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private barcode: BarcodeScanner,
    private stampService: stampService,
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

  //clear localstorage
  clearStorage() {
    console.log("CLEAR");
    this.storage.clear();
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