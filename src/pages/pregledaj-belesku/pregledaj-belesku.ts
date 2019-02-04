import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeleskaServis } from '../../providers/beleska-servis/beleska-servis';
import { Note } from '../../models/note.model'

@IonicPage()
@Component({
  selector: 'page-pregledaj-belesku',
  templateUrl: 'pregledaj-belesku.html',
})
export class PregledajBeleskuPage {
  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private beleskaServis: BeleskaServis) {
    this.note = this.navParams.get('note');
  
  }

  
  obrisiBelesku(createDate: number){
    this.beleskaServis.obrisiBelesku(createDate);
    this.navCtrl.pop();
  }

}
