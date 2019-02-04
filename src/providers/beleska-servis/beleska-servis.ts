import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
import { Note } from '../../models/note.model';

@Injectable()
export class BeleskaServis {

  private notes: Note[] = [];
  private note: Note;

  constructor(public storage: Storage) {
  }

  sacuvajBelesku(note: Note){
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  prikupiSveBeleske(){
    return this.storage.get('notes').then(
      (notes)=> {
        this.notes= notes == null ? [] : notes;
        return [...this.notes];
      }
    )
  }
  prikupiBelesku(createDate: number){
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find (r=> r.createDate === createDate);
      return this.note;
    })
  }
  obrisiBelesku(createDate: number){          // brisemo tako sto vracamo vec postojeci niz belezaka samo bez te koju hocemo
    this.notes = this.notes.filter((note)=> {    // da obrisemo
      return note.createDate !== createDate
    });
    this.storage.set('notes',this.notes);
  }
}
