import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DodajBeleskuPage } from '../pages/dodaj-belesku/dodaj-belesku';
import { BeleskaServis } from '../providers/beleska-servis/beleska-servis';
import { IonicStorageModule } from '@ionic/Storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PregledajBeleskuPage } from '../pages/pregledaj-belesku/pregledaj-belesku';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DodajBeleskuPage,
    PregledajBeleskuPage, 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DodajBeleskuPage,
    PregledajBeleskuPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeleskaServis,
    
  ]
})
export class AppModule {}
