import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { MapsPage } from '../pages/maps/maps';
import { UserPage } from '../pages/user/user';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { IonicStorageModule } from '@ionic/storage';
import { NfcScanProvider } from '../providers/nfc-scan/nfc-scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';





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
    NfcScanProvider,
    BarcodeScanner,
    Geolocation,
    // NFC,
    // Ndef
    InAppBrowser
  ]
})
export class AppModule {}
