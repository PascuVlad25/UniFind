import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
//import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'; // FirebaseListObservable, 
import { SelectiePage } from './selectie';

@Component({
  selector: 'page-home',
  templateUrl: 'chat.html'
})
export class ChatPage {
    informatiiStudent = {nume: "Vlad", materii: ['Biologie', 'Religie']};
    
    ListaValori = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    newInfo;
    
    numeClient = "";  
    mesajeChat = [{expeditor: 'asistent', mesaj: "Salut!", intrebare: ''},
                  {expeditor: 'asistent', mesaj: "Eu sunt Popândăul și sunt aici să te ajut în alegerea facultății.", intrebare: ''},
                  {expeditor: 'asistent', mesaj: "Cum te numești?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Nume", intrebare: "nume"},
                  
                  {expeditor: 'asistent', mesaj: "Încântat de cunoștință,. Hai să ne cunoaștem mai bine.", intrebare: ''},
                  {expeditor: 'asistent', mesaj: "Din ce județ ești?", intrebare: ''},
                  
                  {expeditor: 'client', mesaj: "Judet", intrebare: "judet"},
                  
                  {expeditor: 'asistent', mesaj: "Ce materii ți-au plăcut în liceu?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Materii", intrebare: 'materii'},

                  {expeditor: 'asistent', mesaj: "Ai studiat vreodată un instrument muzical?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'muzicala'},
                      
                {expeditor: 'asistent', mesaj: "Îți place să înveți alte limbi?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'verbala'},
                     
                 {expeditor: 'asistent', mesaj: "Petreci timp în mod regulat reflectând și gândindu-te la problemele vieții?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'existentiala'},
                      
                {expeditor: 'asistent', mesaj: "Îți plac puzzle-urile?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'logica-matematica'},
                      
                {expeditor: 'asistent', mesaj: "Poți să îți imaginezi lucruri cu ușurință?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'vizuala'},
                     
                 {expeditor: 'asistent', mesaj: "îți plac plimbările în natură?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'naturalista'},
                      
                {expeditor: 'asistent', mesaj: "Îți place să construiești sau să asamblezi lucruri?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'corporal-kinestezica'},
                      
                {expeditor: 'asistent', mesaj: "Îți place să interacționezi cu alte persoane?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'interpersonala'},
                      
                {expeditor: 'asistent', mesaj: "Îți cunoști punctele tari și punctele slabe?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'intrapersonala'},
                     
                 {expeditor: 'asistent', mesaj: "Dacă auzi o melodie o dată, o poți reproduce cu ușurință?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'muzicala'},
                      
                      {expeditor: 'asistent', mesaj: "Îți place să citești cărți?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'verbala'},
                     
                 {expeditor: 'asistent', mesaj: "Practici meditația?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'existentiala'},
                      
                {expeditor: 'asistent', mesaj: "Te pricepi la șah sau alte jocuri de strategie?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'logica-matematica'},
                      
                {expeditor: 'asistent', mesaj: "Te orientezi ușor în locuri necunoscute?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'vizuala'},
                     
                 {expeditor: 'asistent', mesaj: "Îți place să explorezi spații noi?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'naturalista'},
                      
                {expeditor: 'asistent', mesaj: "Folosești mult gesticulațiile în interacțiunile cu alte persoane?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'corporal-kinestezica'},
                      
                {expeditor: 'asistent', mesaj: "Ești o persoana empatică?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'interpersonala'},
                      
                {expeditor: 'asistent', mesaj: "Ai un jurnal în care să-ți notezi gândurile?", intrebare: ''},
                  
                 {expeditor: 'client', mesaj: "Muzicala", intrebare: 'intrapersonala'},
                  
                  {expeditor: 'asistent', mesaj: "Super! Apasă pe buton pentru lista ta personalizată de facultăți.", intrebare: ''},
                  {expeditor: 'final', mesaj: '', intrebare: 'final'}
                 ];
    
    mesajeTrimise = [];
    mesajCurent = 0;
    
    listaJudete = [{"auto":"AB","nume":"Alba"},{"auto":"AR","nume":"Arad"},{"auto":"AG","nume":"Argeş"},{"auto":"BC","nume":"Bacău"},{"auto":"BH","nume":"Bihor"},{"auto":"BN","nume":"Bistriţa-Năsăud"},{"auto":"BT","nume":"Botoşani"},{"auto":"BR","nume":"Brăila"},{"auto":"BV","nume":"Braşov"},{"auto":"B","nume":"Bucureşti"},{"auto":"BZ","nume":"Buzău"},{"auto":"CL","nume":"Călăraşi"},{"auto":"CS","nume":"Caraş-Severin"},{"auto":"CJ","nume":"Cluj"},{"auto":"CT","nume":"Constanţa"},{"auto":"CV","nume":"Covasna"},{"auto":"DB","nume":"Dâmboviţa"},{"auto":"DJ","nume":"Dolj"},{"auto":"GL","nume":"Galaţi"},{"auto":"GR","nume":"Giurgiu"},{"auto":"GJ","nume":"Gorj"},{"auto":"HR","nume":"Harghita"},{"auto":"HD","nume":"Hunedoara"},{"auto":"IL","nume":"Ialomiţa"},{"auto":"IS","nume":"Iaşi"},{"auto":"IF","nume":"Ilfov"},{"auto":"MM","nume":"Maramureş"},{"auto":"MH","nume":"Mehedinţi"},{"auto":"MS","nume":"Mureş"},{"auto":"NT","nume":"Neamţ"},{"auto":"OT","nume":"Olt"},{"auto":"PH","nume":"Prahova"},{"auto":"SJ","nume":"Sălaj"},{"auto":"SM","nume":"Satu Mare"},{"auto":"SB","nume":"Sibiu"},{"auto":"SV","nume":"Suceava"},{"auto":"TR","nume":"Teleorman"},{"auto":"TM","nume":"Timiş"},{"auto":"TL","nume":"Tulcea"},{"auto":"VL","nume":"Vâlcea"},{"auto":"VS","nume":"Vaslui"},{"auto":"VN","nume":"Vrancea"}]
    
    
    constructor(public alertCtrl: AlertController, public navCtrl: NavController){
        this.urmatoareaIntrebare();
    }
    
    urmatoareaIntrebare(){
        do{
            let mesaj = this.mesajeChat[this.mesajCurent];
            this.mesajeTrimise.push(mesaj);
            this.mesajCurent++;
        }while(this.mesajeChat[this.mesajCurent].expeditor == "asistent" && this.mesajeChat[this.mesajCurent].expeditor != "final");
        if(this.mesajeChat[this.mesajCurent].expeditor == "final"){
            this.incrementeazaMaterii();
            this.goTo(this.ListaValori);
        }
    }
    
    raspunsDouaAlegeri(intrebare, index) {
        let alert = this.alertCtrl.create({
        title: intrebare,
        buttons: [
          {
            text: 'Da',
            handler: () => {
                this.mesajeChat[this.mesajCurent].mesaj = "Da";
              this.urmatoareaIntrebare();
                this.ListaValori[index]+=1;
                
            }
          },
          {
            text: 'Nu',
            handler: () => {
                this.mesajeChat[this.mesajCurent].mesaj = "Nu";
                this.urmatoareaIntrebare();
            }
          }
        ]
      });
      alert.present();
        
    }
    
    raspunsNume(intrebare) {
  let alert = this.alertCtrl.create({
    title: intrebare,
    inputs: [
      {
        name: 'nume',
        placeholder: 'Introdu Nume'
      }
    ],
    buttons: [
      {
        text: 'Răspunde',
        handler: data => {
            this.numeClient = data.nume;
            this.mesajeChat[this.mesajCurent].mesaj = data.nume;
            this.mesajeChat[this.mesajCurent+1].mesaj = "Încântat de cunoștință, " + this.numeClient + ". Hai să ne cunoaștem mai bine."
            this.urmatoareaIntrebare();
            this.informatiiStudent.nume= this.numeClient;
          }
        }
    ]
  });
  alert.present();
}
    
    
    raspunsAlesUnRaspuns(lista, titlu, index) {
        let alert = this.alertCtrl.create();
        alert.setTitle(titlu);
        
        for(let element in lista){
            alert.addInput({
              type: 'radio',
              label: lista[element].nume,
              value: lista[element].nume,
              checked: false
            });
        }

        alert.addButton({
          text: 'Selecteaza',
          handler: data => {
                this.mesajeChat[this.mesajCurent].mesaj = data;
                this.urmatoareaIntrebare();
                this.informatiiStudent[index] = data;
            
          }
        });
        alert.present();
      }
    
    
    raspunsMultiplu(lista, titlu, index){
        let alert = this.alertCtrl.create();
        alert.setTitle(titlu);

        for(let i in lista){
            alert.addInput({
              type: 'checkbox',
              label: lista[i].nume,
              value: lista[i].nume
            });
        }

        alert.addButton({
          text: 'Raspunde',
          handler: data => {
              this.mesajeChat[this.mesajCurent].mesaj = data.join(', ');
                this.urmatoareaIntrebare();
                this.informatiiStudent[index] = data;
          }
        });
        alert.present();
    }
    
    
    incrementeazaMaterii(){
        let lista_materii = this.informatiiStudent["materii"];
        
            for(let i in lista_materii){
                
                if(lista_materii[i] == "Matematică"){
                    this.ListaValori[3]+=2;
                    this.ListaValori[4]+=1;
                }
                else if(lista_materii[i] == "Informatică"){
                    this.ListaValori[3]+=2;
                }
                else if(lista_materii[i] == "Biologie"){
                    this.ListaValori[5]+=2;
                    this.ListaValori[6]+=1;
                }
                else if(lista_materii[i] == "Chimie"){
                    this.ListaValori[5]+=1;
                }
                else if(lista_materii[i] == "Fizică"){
                    this.ListaValori[3]+=1;
                    this.ListaValori[6]+=1;
                }
                else if(lista_materii[i] == "Economie"){
                    this.ListaValori[3]+=1;
                    this.ListaValori[7]+=1;
                }
                else if(lista_materii[i] == "Limba Română"){
                    this.ListaValori[7]+=1;
                    this.ListaValori[1]+=2;
                }
                else if(lista_materii[i] == "Limba Engleză"){
                    this.ListaValori[7]+=1;
                    this.ListaValori[1]+=2;
                }
                else if(lista_materii[i] == "Limba Franceză"){
                    this.ListaValori[7]+=1;
                    this.ListaValori[1]+=2;
                }
                else if(lista_materii[i] == "Geografie"){
                    this.ListaValori[5]+=1;
                    this.ListaValori[4]+=2;
                }
                else if(lista_materii[i] == "Istorie"){
                    this.ListaValori[1]+=2;
                }
                else if(lista_materii[i] == "Psihologie"){
                    this.ListaValori[7]+=2;
                    this.ListaValori[8]+=1;
                }
                else if(lista_materii[i] == "Filosofie"){
                    this.ListaValori[2]+=2;
                    this.ListaValori[8]+=1;
                }
                else if(lista_materii[i] == "Ed. Fizică"){
                    this.ListaValori[6]+=2;
                }
                else if(lista_materii[i] == "Ed. Muzicală"){
                    this.ListaValori[0]+=2;
                }
                else if(lista_materii[i] == "Ed. Plastică"){
                    this.ListaValori[4]+=2;
                }
                else if(lista_materii[i] == "Religie"){
                    this.ListaValori[2]+=2;
                }
                    
            }
    }
    
    
    raspunde(){
  
            let raspuns = this.mesajeChat[this.mesajCurent].intrebare;
            let intrebare = this.mesajeChat[this.mesajCurent-1].mesaj;

 
        if(raspuns == "nume")
            this.raspunsNume(intrebare);
        
        else if(raspuns == "judet"){
            this.raspunsAlesUnRaspuns(this.listaJudete, intrebare, "judet");
            }
            
        else if(raspuns == "exterior_judet"){
            let lista = [{nume: "Da"}, {nume: "Mi-e indiferent"}, {nume: "Nu"}];
            
            this.raspunsAlesUnRaspuns(lista, intrebare, "exterior");
            if(this.informatiiStudent["exterior"] != "Nu")
                this.informatiiStudent["judet"] = "Romania";
            console.log(this.informatiiStudent);
        }
        
        else if(raspuns == "materii"){
            let lista = [{nume: "Matematică"}, {nume: "Informatică"}, {nume: "Biologie"}, {nume: "Chimie"}, {nume: "Fizică"}, {nume: "Economie"}, {nume: "Limba Română"}, {nume: "Limba Engleză"}, {nume: "Limba Franceză"}, {nume: "Geografie"}, {nume: "Istorie"}, {nume: "Psihologie"}, {nume: "Filosofie"}, {nume: "Ed. Fizică"}, {nume: "Ed. Muzicală"}, {nume: "Ed. Plastică"}, {nume: "Religie"}];
            
            this.raspunsMultiplu(lista, intrebare, "materii");
        
            console.log(this.informatiiStudent);
            
        }
        else if(raspuns == "muzicala")
            this.raspunsDouaAlegeri(intrebare, 0);
               
        else if(raspuns == "verbala"){
            this.raspunsDouaAlegeri(intrebare, 1);
        }
        else if (raspuns == "existentiala")
            this.raspunsDouaAlegeri(intrebare, 2);
            
        else if(raspuns == "logica-matematica")
            this.raspunsDouaAlegeri(intrebare, 3);
               
        else if(raspuns == "vizuala"){
            this.raspunsDouaAlegeri(intrebare, 4);
        }
        else if (raspuns == "naturalista")
            this.raspunsDouaAlegeri(intrebare, 5);
        
        else if(raspuns == "corporal-kinestezica")
            this.raspunsDouaAlegeri(intrebare, 6);
               
        else if(raspuns == "interpersonala"){
            this.raspunsDouaAlegeri(intrebare, 7);
        }
        else if (raspuns == "intrapersonala")
            this.raspunsDouaAlegeri(intrebare, 8);
            
        else if(raspuns == "final"){
            this.incrementeazaMaterii();
            this.goTo(this.ListaValori);
        }
        
    }
    
    goTo(lista){
        this.navCtrl.push(SelectiePage, {lista: lista});
    }

}
