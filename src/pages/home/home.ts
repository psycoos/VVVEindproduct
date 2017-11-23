import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StampCard } from '../../models/stamp-card/stamp-card.model';
import { StampCardService } from '../../services/stamp-card/stamp-card.service'
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

stampCard: StampCard = {
    "Leeuwarden": false,
    "Sneek": false,
    "Ijlst": false,
    "Sloten": false,
    "Stavoren": false,
    "Hindeloopen": false,
    "Workum": false,
    "Bolsward": false,
    "Harlingen": false,
    "Franeker": false,
    "Dokkum": false
  }

  constructor(
    public navCtrl: NavController,
    public stampCardService: StampCardService,
    private uniqueDeviceID: UniqueDeviceID
  ) {

  }

  

  ionViewDidLoad() {
    this.uniqueDeviceID.get()
  .then((uuid: any) => console.log(uuid))
  .catch((error: any) => console.log(error));
  }

  addStamp(){
    this.stampCardService.addStamp(this.stampCard)
  }

}
function newFunction() {
  return this;
}

