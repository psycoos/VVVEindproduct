import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { stampService } from '../../providers/stamp-service';

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
export class ModalStampcardPage {

  public stampcarousel = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, private stampService: stampService ) {
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ModalStampcardPage');
  // }

}
