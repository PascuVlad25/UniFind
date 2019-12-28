import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'; // FirebaseListObservable
import { FacultatePage } from './facultate';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
    
  //facultyItems: FirebaseListObservable<any[]>;
  facultyItems: AngularFireList<any>;
  searchedItems;
  searchInput = "";
  searchParams = "";

  maxPercent = 50;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, public params: NavParams) {
        this.searchParams = params.data.materie;
        if(this.searchParams)
            this.searchInput = this.searchParams;
      
        this.facultyItems = this.firebaseService.getUniversityName();
        this.filterByName();

  }
    
  filterByName(){
      /*
      Primeste din search.html numele cautat de utilizator
      si filtreaza lista totala
      */
      let searchedName = this.searchInput;
      
      this.searchedItems = [];
      if(searchedName === undefined){
          console.log("SearchName nu e definit!");
          return;
      }
      
      let searchedSplit = searchedName.split(' ');
      //console.log(searchedSplit)
      
      //this.facultyItems.forEach(item => {
       this.facultyItems.valueChanges().forEach(item => {
        for(let i in item){
            let newName = item[i].nume;
            let newTown = item[i].oras;
            
            for (let index in searchedSplit){
                
                if(newName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().
                   includes(searchedSplit[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())){
                
                //console.log("Am gasit un match");
                this.searchedItems.push(item[i]);
            }
                else if (newTown.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                         .includes(searchedSplit[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())){
                
                this.searchedItems.push(item[i]);
            }
            }
        }
      });
      
  }
    
    goTo(param){
        this.navCtrl.push(FacultatePage, {facultate: param});
    }

}