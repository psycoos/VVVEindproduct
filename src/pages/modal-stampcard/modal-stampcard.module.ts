import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalStampcardPage } from './modal-stampcard';

@NgModule({
  declarations: [
    ModalStampcardPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalStampcardPage),
  ],
})
export class ModalStampcardPageModule {}
