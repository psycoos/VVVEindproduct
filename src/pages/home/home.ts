import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Storage } from '@ionic/storage'
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

import { QrCodeProvider } from '../../providers/qr-code/qr-code'




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

stampCard2: Array<Object> = []

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

 
 
  constructor(
    public navCtrl: NavController,
    private uniqueDeviceID: UniqueDeviceID,
    public storage: Storage,
    private barcode: BarcodeScanner,
    private qrcodeProvider: QrCodeProvider,
    
  ) {
     storage.set('stampcard', this.stampCard);

     storage.get('stampcard').then((kaart) => {
      this.stampCard2.push(kaart)
      console.log(this.stampCard2[0])
    })
     
  }

//   updateValue( scanResult ) {
//     for (var i in this.stampCard) {
//       if (this.stampCard[i].name == scanResult) {
//          this.stampCard[i].value = true;
//          this.storage.set('stempelkaart', this.stampCard);
//          break;
//       }
//     }
//  }

scan() {
  this.dingendoen(this.qrcodeProvider.scan())
}




dingendoen(scanResult) {
    // this.storage.set('stempelkaart', this.stampCard);

    this.storage.get('stampcard').then((kaart) => {
      for (var i in kaart) {
        if (kaart[i].name === scanResult) {
          console.log(kaart);
          console.log(kaart[i]);
          kaart[i].value = true;
          this.storage.set('stampcard', kaart); 
         //dit gaat ook kapot omdat het een string moet zijn    
        }
      }
    });
  }

  latenzien() {
    // this.storage.get('stempelkaart').then((val) => {
    //   console.log(val)
    // })
    this.storage.get('stampcard').then((val) => {
      console.log(val);
    })
   // this.storage.set('stampcard', this.stampCard)
  }

  ionViewDidLoad() {
    
  }


}


