import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NFC, Ndef } from '@ionic-native/nfc';
import { Subscription } from 'rxjs/Rx'


/*
  Generated class for the NfcScanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NfcScanProvider {

  readingTag:   boolean   = false;
  writingTag:   boolean   = false;
  isWriting:    boolean   = false;
  ndefMsg:      string    = '';
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    public http: HttpClient,
    private nfc: NFC,
    private ndef: Ndef
  
  ) {
    this.subscriptions.push(this.nfc.addNdefListener()
    .subscribe(data => {
      if (this.readingTag) {
        let payload = data.tag.ndefMessage[0].payload;
        let tagContent = this.nfc.bytesToString(payload).substring(3);
        this.readingTag = false;
        console.log("De stad is: ", tagContent);
        return tagContent
      }
      else if (this.writingTag) {
        if (!this.isWriting) {
          this.isWriting = true;
          this.nfc.write([this.ndefMsg])
            .then(() => {
              this.writingTag = false;
              this.isWriting = false;
              console.log("written");
            })
            .catch(err => {
              this.writingTag = false;
              this.isWriting = false;
            });
        }
      }
    },
    err => {

    })
 );
  }


  readTag() {
    this.readingTag = true;
  }

}

