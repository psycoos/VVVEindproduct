import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(
    // public http: HttpClient,
    public platform: Platform,
    private barcode: BarcodeScanner
  ) 
  {
    console.log('Hello QrCodeProvider Provider');
  }

  scan() {
      this.barcode.scan().then((barcodeData) => {
        // success
        return barcodeData.text;
      }, (err) => {
        // error
        alert(err);
      });
  }

}
