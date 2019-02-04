import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { BeleskaServis } from '../../providers/beleska-servis/beleska-servis'
import { Note } from '../../models/note.model'
import { FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dodaj-belesku',
  templateUrl: 'dodaj-belesku.html',
})
export class DodajBeleskuPage {

  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';


  constructor(public navCtrl: NavController, private BeleskaServis: BeleskaServis) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    })
  }

  sacuvajBelesku(note: Note){
    this.BeleskaServis.sacuvajBelesku(note);
    this.navCtrl.pop();
  }
}
