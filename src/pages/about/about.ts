import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private points: number = 0; 

  constructor(public navCtrl: NavController) {
   
     this.points = 44; // get it somewhere from dartabase
  }

  pointsPlus(){      
    this.points++;

    console.log('pointsPlus: +' + this.points);         
  }  

  pointsMinus(){      

    this.points--;

    console.log('pointsMinus: -' + this.points);
       
  }  

}
