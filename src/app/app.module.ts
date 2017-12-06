import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { MapsPage } from '../pages/maps/maps';
import { UserPage } from '../pages/user/user';

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
    IonicModule.forRoot(MyApp)
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
    QrCodeProvider
  ]
})
export class AppModule {}
