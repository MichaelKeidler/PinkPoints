import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPageModule } from '../pages/login/login.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireModule } from 'angularfire2'

export const firebaseConfig  = {  
    apiKey: "AIzaSyB87MhxOZZ-4lBUzhUmMD-Hb3VFpquwIz0",
    authDomain: "fir-pinkypoints.firebaseapp.com",
    databaseURL: "https://fir-pinkypoints.firebaseio.com",
    projectId: "firebase-pinkypoints",
    storageBucket: "firebase-pinkypoints.appspot.com",
    messagingSenderId: "47400303710"  
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    // AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Facebook,     
    GooglePlus,         
  ]
})
export class AppModule {}
