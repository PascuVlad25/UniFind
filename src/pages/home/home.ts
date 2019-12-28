import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AngularFireList} from 'angularfire2/database'; //FirebaseListObservable,
import { ChatPage } from './chat';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  colorList = ['color1', 'color2', 'color3', 'color4', 'color5', 'main-color-theme'];
  articole = [{titlu: 'Facultatea în țară sau în afară?', descriere: 'Veșnica întrebare a studentului român. Uite câteva părți bune și părți rele legate de studiul în străinătate.', color: ''}, 
              {titlu: 'Specializări căutate de care nu ai auzit', descriere: 'Câteva specializări mai puțin populare, dar care se caută mai apoi pe piața muncii.', color: ''}, 
              {titlu: 'Ghidul studentului de anul întai', descriere: 'Câteva sfaturi și trick-uri care te vor ajuta în primul an de facultate.', color: ''}]

  // universityItems: FirebaseListObservable<any[]>;
  universityItems: AngularFireList<any>;

  newNume;
  newUniversitate;
  newOras;
  newImagine;


  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
        this.universityItems = this.firebaseService.getUniversityName();
  }

  ngOnInit(): void {
    this.articole.forEach(articol => articol.color = this.getRandomColorClass());
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
    
    getRandomColorClass(): string {
      return this.colorList[Math.floor(Math.random() * this.colorList.length)];
    }
}
