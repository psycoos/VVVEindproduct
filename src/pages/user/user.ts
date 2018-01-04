import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  openModal () {
    const myModalOptions : ModalOptions = {
      showBackdrop: true
    };

    const myModal = this.modal.create('FormPage', myModalOptions)

    myModal.present();
  }

}
