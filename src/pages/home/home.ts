import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private fb = new Facebook();

  constructor(public navCtrl: NavController) {
    
  }

    FBLogin(){
      
        console.log('Button FB Login');

        this.fb.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
        .catch(e => console.log('Error logging into Facebook', e));
 /*       */
    }  
}
