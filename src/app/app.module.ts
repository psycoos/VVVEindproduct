import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { MapsPage } from '../pages/maps/maps';
import { UserPage } from '../pages/user/user';
import { StampCardService } from '../services/stamp-card/stamp-card.service';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { IonicStorageModule } from '@ionic/storage';
import { NfcScanProvider } from '../providers/nfc-scan/nfc-scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { GoogleMaps } from '@ionic-native/google-maps';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MapsPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MapsPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    StampCardService,
    UniqueDeviceID,
    NfcScanProvider,
    BarcodeScanner,
    GoogleMaps,
  ]
})
export class AppModule {}
