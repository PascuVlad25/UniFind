import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'selectie.html'
})
export class SelectiePage {

  universityItems: FirebaseListObservable<any[]>;
  facultatiSelectie = [];
  listaValori;


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
        this.universityItems = this.firebaseService.getUniversityName();
        this.listaValori = navParams.data.lista;
      
//      this.filterByValori();
      this.filterUniversity()
  }
    
    filterByValori(){
      /*
      Primeste din search.html numele cautat de utilizator
      si filtreaza lista totala
      */
      let searchedName = "";
      
      this.facultatiSelectie = [];
      if(searchedName === undefined){
          console.log("SearchName nu e definit!");
          return;
      }
      
      
      this.universityItems.forEach(item => {
        for(let i in item){
            let newName = item[i].nume;
            if(newName.toLowerCase().includes(searchedName.toLowerCase())){
                
                this.facultatiSelectie.push(item[i]);
            }
        }
      });
  }
    
    
    filterUniversity(){
        //VALORILE USERULUI
        let newList; //VALORILE FACULTATII
        this.universityItems.forEach(item => {
        for(let i in item){
            
            let listString = item[i].list;
            
            if(listString != undefined){
                newList = this.convertStringToInt(listString);
                if(this.compareValues(this.listaValori, newList))
                    this.facultatiSelectie.push(item[i]);
            }
            else{
                console.log("Lista nedefinita!");
            }
        }
      });
    }
    
    compareValues(userList, newList){
        /*
        Verifica daca valorile din userList
        sunt mai mici decat cele ale facultatii
        */
        
        for(let i in userList){
            if(userList[i] < newList[i])
                return false;
        }
        return true;
    }
    
    convertStringToInt(listString){
        /*
        Transforma lista inteligentelor in lista
        de int-uri
        */
        let newList = [];
        if(listString === undefined){
            console.log("Lista nedefinita.")
        }
        else{
            var splitList = listString.split(',', 9);
            for(let splitElem of splitList){
                newList.push(Number(splitElem));
            }
        }
        return newList;
        
    }
}