import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StampCard } from '../../models/stamp-card/stamp-card.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stampCard: StampCard = {
    Leeuwarden: false,
    Sneek: false,
    Ijlst: false,
    Sloten: false,
    Stavoren: false,
    Hindeloopen: false,
    Workum: false,
    Bolsward: false,
    Harlingen: false,
    Franeker: false,
    Dokkum: false
  }

  constructor(public navCtrl: NavController) {

  }

}
