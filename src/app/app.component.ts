import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs'; //named import
import  firebase  from 'firebase'; //default import, https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  fire:any = firebase;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      firebase.initializeApp({
        apiKey: "AIzaSyB87MhxOZZ-4lBUzhUmMD-Hb3VFpquwIz0",
        authDomain: "fir-pinkypoints.firebaseapp.com",
        databaseURL: "https://fir-pinkypoints.firebaseio.com",
        projectId: "firebase-pinkypoints",
        storageBucket: "firebase-pinkypoints.appspot.com",
        messagingSenderId: "47400303710"
      });
    });
  }
}
