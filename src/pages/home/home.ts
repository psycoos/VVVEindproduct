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

  veranderStad(){
    this.stampCard[0].value = true;
    this.storage.set('stempelkaart', this.stampCard);


  }

  updateValue( scanResult, value ) {
    for (var i in this.stampCard) {
      if (this.stampCard[i].name == scanResult) {
         this.stampCard[i].value = true;
         break;
      }
    }
 }

  dingendoen() {
    // this.storage.set('stempelkaart', this.stampCard);

    this.storage.get('stempelkaart').then((val) => {
      console.log(val);
    });
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

