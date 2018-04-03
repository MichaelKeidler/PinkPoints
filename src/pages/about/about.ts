import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private points: number = 0;
  public newPoints = new Points; 
  public quasiFibonacci = [{value:0, label:'0 PinkyPoints'},
                           {value:0.5, label: '0.5 PinkyPoints'},
                           {value:1, label:'1 PinkyPoints'},
                           {value:2, label: '2 PinkyPoints'},
                           {value:3, label:'3 PinkyPoints'},
                           {value:5, label: '5 PinkyPoints'},
                           {value:8, label:'8 PinkyPoints'},
                           {value:13, label: '13 PinkyPoints'},
                           {value:20, label:'20 PinkyPoints'},
                           {value:40, label: '40 PinkyPoints'},
                           {value:100, label:'100 PinkyPoints'},
                           {value:500, label: '500 PinkyPoints'},                           
                           {value:-0.5, label: '-0.5 BlackPoints'},
                           {value:-1, label:'-1 BlackPoints'},
                           {value:-2, label: '-2 BlackPoints'},
                           {value:-3, label:'-3 BlackPoints'},
                           {value:-5, label: '-5 BlackPoints'},
                           {value:-8, label:'-8 BlackPoints'},
                           {value:-13, label: '-13 BlackPoints'},
                           {value:-20, label:'-20 BlackPoints'},
                           {value:-40, label: '-40 BlackPoints'},
                           {value:-100, label:'-100 BlackPoints'},
                           {value:-500, label: '-500 BlackPoints'}]

  constructor(public navCtrl: NavController) {

    this.points = 44; // get it somewhere from dartabase
    this.newPoints.amount = 1;
  }

  pointsPlus() {
    this.points++;

    console.log('pointsPlus: +' + this.points);
  }
  
  pointsCommit() {
    this.points = this.points + this.newPoints.amount;

    // write to DB here

    console.log('newPoints.amount: +' + this.newPoints.amount);
    console.log('pointsCommit: +' + this.points);
  }

  pointsMinus() {
    this.points--;

    console.log('pointsMinus: -' + this.points);
  }

  RefreshTotal() {
    console.log('Refresh Total');
   }

/*   onChange($event){
    console.log('onChange')
    console.log($event.target.value);
   } */

  onSelectChange(selectedValue: any) {
    console.log('onSelectChange, Selected value: ', selectedValue);
  }
}

class Points {
  public amount: number;
  public reason: string;
}
