import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-search',
  templateUrl: 'facultate.html'
})

export class FacultatePage {
    facultate;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, public params: NavParams) {
      this.facultate = this.params.data.facultate;
      console.log(this.facultate);
  }
}
