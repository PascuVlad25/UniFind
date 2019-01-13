import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { FacultatePage } from '../pages/search/facultate';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/home/chat';
import { SelectiePage } from '../pages/home/selectie';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider  } from './../providers/firebase-service/firebase-service';

const firebaseConfig = {
    apiKey: "AIzaSyC_oVchPhlCbbjc-pubYWwwriwufTn3-Fc",
    authDomain: "hackathon-153ed.firebaseapp.com",
    databaseURL: "https://hackathon-153ed.firebaseio.com",
    projectId: "hackathon-153ed",
    storageBucket: "hackathon-153ed.appspot.com",
    messagingSenderId: "966796671075"
  };



@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    FacultatePage,
    ContactPage,
    HomePage,
    ChatPage,
      SelectiePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,

    /** DATABASE INITIALIZE  **/
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    FacultatePage,
    ContactPage,
    HomePage,
    ChatPage,
      SelectiePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

      FirebaseServiceProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
