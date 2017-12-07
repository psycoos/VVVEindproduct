import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { City } from '../../models/stamp-card/stamp-card.model';
import { StampCardService } from '../../services/stamp-card/stamp-card.service'
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

stampCard = [
  {
    name: "Leeuwarden",
    value: false,
    trueimage: "blabla",
    falseimage: "blalalala"
  },
  {
    name: "Sneek",
    value: false,
    trueimage: "blabla",
    falseimage: "blalalala"
  },
  {
    name: "Ijlst",
    value: false,
    trueimage: "blabla",
    falseimage: "blalalala"
  },
  {
    name: "Sloten",
    value: false,
    trueimage: "blabla",
    falseimage: "blalalala"
  }
]



  constructor(
    public navCtrl: NavController,
    public stampCardService: StampCardService,
    private uniqueDeviceID: UniqueDeviceID,
    public storage: Storage
  ) {
    // storage.set('stempelkaart', this.stampCard);
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

  addStamp(){
    this.stampCardService.addStamps(this.stampCard);
    this.stampCardService.getStampCard()
  }

}
function newFunction() {
  return this;
}

