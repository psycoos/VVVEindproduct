import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { StampCardService } from '../../services/stamp-card/stamp-card.service'
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Storage } from '@ionic/storage'
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';




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
]

 
 
  constructor(
    public navCtrl: NavController,
    public stampCardService: StampCardService,
    private uniqueDeviceID: UniqueDeviceID,
    public storage: Storage,
    private barcode: BarcodeScanner
  ) {
     storage.set('stampcard', this.stampCard);
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
  this.barcode.scan().then((barcodeData) => {
    this.dingendoen(barcodeData.text)
  }, (err) => {
    // error
    alert(err);
  });
}



dingendoen(scanResult: string) {
    // this.storage.set('stempelkaart', this.stampCard);

    this.storage.get('stampcard').then((kaart) => {
      for (var i in kaart) {
        if (kaart[i].name === scanResult) {
          console.log(kaart);
          console.log(kaart[i]);
          kaart[i].value = true;
          this.storage.set('stampcard', kaart); //dit gaat ook kapot omdat het een string moet zijn    
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


