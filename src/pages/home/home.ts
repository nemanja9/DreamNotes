import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DodajBeleskuPage } from '../dodaj-belesku/dodaj-belesku';
import { BeleskaServis } from '../../providers/beleska-servis/beleska-servis';
import { Note } from '../../models/note.model';
import { PregledajBeleskuPage } from '../pregledaj-belesku/pregledaj-belesku';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notes: Promise <Note[]>;
  private note: Note;
  constructor(public navCtrl: NavController,private BeleskaServis: BeleskaServis) {
  }
  ionViewWillEnter(){
    this.notes = this.prikupiSveBeleske();
  }

  dodajBelesku(){
    this.navCtrl.push(DodajBeleskuPage);
  }
  
  prikupiSveBeleske(){
    return this.BeleskaServis.prikupiSveBeleske();
  }

  prikupiBelesku(createDate: number){
    this.BeleskaServis.prikupiBelesku(createDate).then((n)=>{
      this.note = n;
      this.navCtrl.push(PregledajBeleskuPage,{note: this.note});
    })
  }
}
