import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsPage } from '../maps/maps';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { stampService } from '../../providers/stamp-service';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Subscription } from 'rxjs/Rx';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stampcard',
  templateUrl: 'stampcard.html',
})

export class StampcardPage implements AfterViewInit{

  buttonDisabled: boolean;

  ngAfterViewInit(): void {
    this.buttonDisabled = false;
  }
  
  tab1Root = MapsPage;
  tab2Root = HomePage;
  tab3Root = UserPage;

  readingTag:   boolean   = false;
  subscriptions: Array<Subscription> = new Array<Subscription>();

  public stampcarousel = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public modalCtrl : ModalController,
    private iab: InAppBrowser,
    private barcode: BarcodeScanner,
    private stampService: stampService,
    private nfc: NFC,
    private ndef: Ndef
    
  ) {

    // //zet de stempelkaart in de array als er nog geen is, update anders curStamp met localstorage
    // storage.get('stampcard').then((kaart) => { 
    //     this.stampcarousel = kaart; //kaart uit de localstorage
    // });

  //   this.subscriptions.push(this.nfc.addNdefListener()
  //   .subscribe(data => {
  //     if (this.readingTag) {
  //       let payload = data.tag.ndefMessage[0].payload;
  //       let tagContent = this.nfc.bytesToString(payload).substring(3);
  //       this.readingTag = false;
  //       console.log("De stad is: ", tagContent);
        
  //       this.checkValue(tagContent);
  //     }
  //     },
  //   )
  // );
    
  }

  openhim(){
    const browser = this.iab.create('https://www.google.nl/maps');
  }

    scan() {
      this.buttonDisabled = true;
     this.barcode.scan().then((barcodeData) => {
      this.checkValue(barcodeData.text);  //roep checkValue aan op het resultaat van de scan
    }   , (err) => { // error
      alert(err);
    }
   );
   }


  readTag() {
    alert("NFC staat aan");
    this.readingTag = true;
  }



  //verandert de stempel state van de gescande stad in true
  checkValue(scanResult) {
    this.buttonDisabled = false;
    this.storage.get('stampcard').then((kaart) => {
      for (var i in kaart) {
        if (kaart[i].name === scanResult) {//check of de scan overeenkomt met een stad in de stempelkaart
          kaart[i].value = true;//set de value
          this.stampService.stamp = kaart;//update stamp
           this.storage.set('stampcard', kaart);//update localstorage zodat deze gelijk is aan curStamp
           
        }
      }
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StampcardPage');
  }

  public openModal() {
    var modalStampcardPage = this.modalCtrl.create('ModalStampcardPage'); modalStampcardPage.present();
  }
}
