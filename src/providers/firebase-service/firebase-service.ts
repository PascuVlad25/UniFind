import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getUniversityName(){
      return this.afd.list('/Facultati');
  }

  addItem(name, universitate, oras, imagine){
      let obj = {nume: name, universitate: universitate, oras: oras, imagine: imagine};
      this.afd.list('/Facultati/').push(obj);
  }

  removeUniversity(id){
      this.afd.list('/Facultati').remove(id);
  }
}
