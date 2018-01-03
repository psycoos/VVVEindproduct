import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {


  email = {
    to: 'opeigenhoutjevvv@gmail.com',
    attachments: [
    ],
    subject: 'Volle elfsteden stempelkaart',
    body: '',
    isHtml: true
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private emailComposer: EmailComposer
  ) {
    
  }

  sendMail(){
    this.emailComposer.open(this.email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
  }

}
