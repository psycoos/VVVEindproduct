import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';


import { Storage } from '@ionic/storage';
import { stampService } from '../../providers/stamp-service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Subscription } from 'rxjs/Rx';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the ModalStampcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-stampcard',
  templateUrl: 'modal-stampcard.html',
})
export class ModalStampcardPage implements AfterViewInit{

  buttonDisabled: boolean;

  ngAfterViewInit(): void {
    this.buttonDisabled = false;
  }

  public stampcarousel = [];

  readingTag:   boolean   = false;
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl : ViewController, 
    private stampService: stampService,
    public storage: Storage,
    private barcode: BarcodeScanner,
    private nfc: NFC,
    private ndef: Ndef
    
  ) 
  {
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

  public closeModal(){
    this.viewCtrl.dismiss();
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
         this.navCtrl.setRoot(TabsPage);
         this.viewCtrl.dismiss();
      }
    }
  });
}

  ionViewDidEnter() {
    console.log('ionViewDidLoad ModalStampcardPage');
    this.readTag();
  }

}
