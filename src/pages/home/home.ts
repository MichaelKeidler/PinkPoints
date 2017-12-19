import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
// import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook'
import { Platform } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  items: Observable<any[]>;

  private fb = new Facebook();

  //private userProfile: any = null;

  private at = '';

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public platform: Platform,
              private fbAuth: AngularFireAuth) {
    
  }

  presentToast() {
    
    this.fb.getAccessToken()
    .then((at: string) => this.at = at)
    .catch(e => console.log('Error getting AccessToken', e)); 

    let toast = this.toastCtrl.create({
      message: 'AccessToken: ' + this.at , duration: 1000 })

    toast.present();
  }

    FBLogin(){      
        console.log('login-facebook');
                
        this.fb.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
        .catch(e => console.log('Error logging into Facebook', e)); 
    }  

    GoogleLogin(): void {      
        console.log('login-google');

      // WebClientID is different for iOS, Android and Web:        
        /* 
      if (this.platform.is('windows'))
        this.googleClientID = '47400303710-jjveir06futqet5kt2hl4pchnhbr4get.apps.googleusercontent.com';

      if (this.platform.is('ios'))
        this.googleClientID = '47400303710-nilpm678vsq235dsmd0boaq67vsk21pn.apps.googleusercontent.com';

      if (this.platform.is('android'))
        this.googleClientID = '47400303710-k7fq4ppvuj7decrrgvvh3daaieuqkg2g.apps.googleusercontent.com';

      this.googlePlus.login({
          'webClientId': this.googleClientID, 
          'offline': true
        })
        .then(res => console.log(res))
        .catch(err => console.error(err)); */
    }  


    FireBaseLogin(){      
        console.log('login-FireBase');

        this.fbAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res))
        .catch(error => console.log(error))       

    }  

    Logout(){      
        console.log('Logout');

        this.fbAuth.auth.signOut();

        if (this.fb != null){
          this.fb.logout();
          this.at = '';
        }          
    } 
}

