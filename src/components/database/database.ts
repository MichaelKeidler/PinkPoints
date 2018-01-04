import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject  } from 'angularfire2/database';

/**
 * Generated class for the DatabaseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'database',
  templateUrl: 'database.html'
})

export class DatabaseComponent {

  text: string;
  itemRef: AngularFireObject<any>;

  
  constructor(db: AngularFireDatabase) {
    console.log('Hello DatabaseComponent Component');
    this.text = 'This is the DatabaseComponent';
    this.itemRef = db.object('item');

  }
  save(newName: string) {
    this.itemRef.set({ name: newName });
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }

}
