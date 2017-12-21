import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StampcardPage } from './stampcard';

@NgModule({
  declarations: [
    StampcardPage,
  ],
  imports: [
    IonicPageModule.forChild(StampcardPage),
  ],
})
export class StampcardPageModule {}
