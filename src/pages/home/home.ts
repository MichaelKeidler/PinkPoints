import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  items: Observable<any[]>;

  private displayName;
  private photoURL;
  private googleClientID;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform,
    private fbAuth: AngularFireAuth,
    private fb: Facebook,     


    private googlePlus: GooglePlus) {
       

    fbAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;

      let toast = this.toastCtrl.create({
        message: 'Hello: ' + user.displayName + '(' + user.uid + ')' + ' ' + user.providerId, duration: 2000 })
  
      toast.present();
    });     
  }

    FBLogin(){      
        console.log('login-facebook');        
                
        if (this.platform.is('cordova')) {
          return this.fb.login(['email', 'public_profile']).then(res => {
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
            return firebase.auth().signInWithCredential(facebookCredential);
          })
        }
        else {
          return this.fbAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(res => console.log(res))
            .catch(error => console.log(error));
        }
    }  

    GoogleLogin() {      
        console.log('login-google');
              
    if (this.platform.is('android') || this.platform.is('ios')) {
        // google native login, seems to work only on android and maybe ios, not in browser with cordova
        if (this.platform.is('ios'))
          this.googleClientID = '47400303710-nilpm678vsq235dsmd0boaq67vsk21pn.apps.googleusercontent.com';
    
        if (this.platform.is('android'))
          this.googleClientID = '47400303710-k7fq4ppvuj7decrrgvvh3daaieuqkg2g.apps.googleusercontent.com';
        
        return this.googlePlus.login({
          'webClientId': this.googleClientID,
          'offline': true
        })
          .then(res => {
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.authResponse.accessToken);
            return firebase.auth().signInWithCredential(googleCredential);
          })
          .catch(error => console.log(error));
      }
      else {
        return this.fbAuth.auth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(res => console.log(res))
          .catch(error => console.log(error));
      }  
    }  


    twitterLogin(){      
        console.log('login-twitter');         
        // Note that signInWithPopup is not supported in Cordova
        var provider = new firebase.auth.TwitterAuthProvider();

        if (this.platform.is('cordova')) {
          return firebase.auth().signInWithRedirect(provider).then(function() {
            return firebase.auth().getRedirectResult();
          }).then(function(result) {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
          });
        }
        else {
          return this.fbAuth.auth
          .signInWithPopup(new firebase.auth.TwitterAuthProvider())
          .then(res => console.log(res))
          .catch(error => console.log(error))     
        }            
    }  

    eMailLogin(){
      console.log('login-email');

      this.navCtrl.push(LoginPage);
    }

    Logout(){      
        console.log('Logout');

        this.fbAuth.auth.signOut();         
    } 
}

