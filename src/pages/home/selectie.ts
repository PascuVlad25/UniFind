import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'; // FirebaseListObservable, 

@Component({
  selector: 'page-home',
  templateUrl: 'selectie.html'
})
export class SelectiePage {

  //universityItems: FirebaseListObservable<any[]>;
  universityItems: AngularFireList<any>;
  facultatiSelectie = [];
  listaValori;
  maxPercentage = 100;


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
        this.universityItems = this.firebaseService.getUniversityName();
        this.listaValori = navParams.data.lista;
//      this.filterByValori();
      this.filterUniversity_v2()
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
      
      
      this.universityItems.valueChanges().forEach(item => {
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
        this.universityItems.valueChanges().forEach(item => {
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
    
    potrivireValues(userList, newList){
        /*
        Verifica daca valorile din userList
        sunt mai mici decat cele ale facultatii
        */
        let procent = 100;
        for(let i in userList){
            let diferenta = userList[i] - newList[i];
            if(diferenta < 0)
                procent += diferenta * 10;
            // if(diferenta > 0)
            //     procent -= diferenta;
        }
        return procent;
    }
    
    filterUniversity_v2(){
        //VALORILE USERULUI
        let newList; //VALORILE FACULTATII
        let newProcent; //Procentul de potrivire cu FACULTATEA
        let newListProcente = [];
//        this.listaValori = [0,2,2,4,1,0,1,2,0];
        
        this.universityItems.valueChanges().forEach(item => {
        for(let i in item){
            let listString = item[i].list;
            if(listString != undefined){
                newList = this.convertStringToInt(listString);
                newProcent = this.potrivireValues(this.listaValori, newList);
                item[i]["procent"] = newProcent;
                
//                if(newListProcente == [])
//                    newListProcente.push(item[i]);
//                let sw=1;
//                for(let j=0; j<newListProcente.length && sw; j++)
//                    if(newProcent > item[j]["procent"]){
//                        newListProcente.splice(j, 0, item[i]);
//                        sw = 0;
//                    }
//                console.log(newListProcente);
                newListProcente.push(item[i]);
               
            }
            else{
                console.log("listString nu e definit");
            }
        }

        newListProcente.sort((facultate_1, facultate_2) => {
            return facultate_2.procent - facultate_1.procent;
        });

        let index = 0;
        this.maxPercentage = newListProcente[0].procent;
        while(index < 6){
            this.facultatiSelectie.push(newListProcente[index]);
            index += 1;
        }
        let lastPercent = newListProcente[5].procent;
        while(newListProcente[index].procent === lastPercent){
            this.facultatiSelectie.push(newListProcente[index]);
            index += 1;
        }
      });
        
        // for(let i=0; i<newListProcente.length-1; i+=1){
        //     for(let j=i+1; j<newListProcente.length; j+=1){
        //         if(newListProcente[i].procent < newListProcente[j].procent){
        //             let aux = newListProcente[i];
        //             newListProcente[i] = newListProcente[j];
        //             newListProcente[j] = aux;
        //         }
        //     }
        // }
    }
                                     
    
}