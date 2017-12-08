import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private fb = new Facebook();

  private cam = new CameraMock();

  private source = 1234;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
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

        if (this.fb != null)
            this.fb.logout();
    }  

    Camera(){
      console.log('Camera');
  
      this.cam.getPicture( this.source );

    }
    onFail(message) {
      alert('Failed because: ' + message);
    }

    onPhotoURISuccess(imageURI) {
    
    }
}

export class CameraMock extends Camera {
    getPicture(options) {
      return new Promise((resolve, reject) => {
        resolve("BASE_64_ENCODED_DATA_GOES_HERE");
      })
    }
  }
