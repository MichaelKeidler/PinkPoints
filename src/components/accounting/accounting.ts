import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

/**
 * Generated class for the AccountingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accounting',
  templateUrl: 'accounting.html'
})

@NgModule({
	declarations: [AccountingComponent],
	imports: [],
	exports: [AccountingComponent]
})

export class AccountingComponent {

  text: string;

  constructor() {
    console.log('Hello AccountingComponent Component');
    this.text = 'Hello World';
  }

}
