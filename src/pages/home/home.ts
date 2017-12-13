import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook'
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private fb = new Facebook();

  private userProfile: any = null;

  private source = 1234;

  private at = '';

  private googleClientID = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private googlePlus: GooglePlus, public platform: Platform) {
    
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
        .catch(err => console.error(err));
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

