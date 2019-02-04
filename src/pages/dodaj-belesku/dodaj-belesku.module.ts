import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DodajBeleskuPage } from './dodaj-belesku';

@NgModule({
  declarations: [
    DodajBeleskuPage,
  ],
  imports: [
    IonicPageModule.forChild(DodajBeleskuPage),
  ],
})
export class DodajBeleskuPageModule {}
