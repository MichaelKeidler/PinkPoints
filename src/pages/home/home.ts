import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app';

import { Facebook } from '@ionic-native/facebook';

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

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform,
    private fbAuth: AngularFireAuth,
    private fb: Facebook) {

    fbAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
      
      let toast = this.toastCtrl.create({
        message: 'Hello: ' + user.displayName + '(' + user.providerId + ')', duration: 2000 })
  
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

    GoogleLogin(): void {      
        console.log('login-google');

        this.fbAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => console.log(res))
        .catch(error => console.log(error))  
    }  


    twitterLogin(){      
        console.log('login-firebase');         

        this.fbAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(res => console.log(res))
        .catch(error => console.log(error)) 

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

