import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MasterService {

  constructor(private firestore: AngularFirestore) { }

  create_master(Record) {
    return this.firestore.collection('Master').add(Record);
  }

  get_master(){
    return this.firestore.collection('Master').snapshotChanges;
  }
  
}