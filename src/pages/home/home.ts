import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private fb = new Facebook();

  

  private source = 1234;

  private at = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
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

    GoogleLogin(){      
        console.log('login-google');

    }  
    twitterLogin(){      
        console.log('login-twitter');

    }  

    Logout(){      
        console.log('Logout');

        if (this.fb != null){
          this.fb.logout();
          this.at = '';
        }          
    } 
}

