import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ChatPage } from './chat';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  universityItems: FirebaseListObservable<any[]>;

  newNume;
  newUniversitate;
  newOras;
  newImagine;


  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
        this.universityItems = this.firebaseService.getUniversityName();

  }

    addItem(){
        this.firebaseService.addItem(this.newNume, this.newUniversitate, this.newOras, this.newImagine);
    }
    
    openNavChatPage() {
        this.navCtrl.push(ChatPage);
  }
    
    goTo(page){
        this.navCtrl.push(SearchPage, {materie: page});
    }
    
    


}
