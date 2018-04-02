import { NgModule } from '@angular/core';
import { DatabaseComponent } from './database/database';
import { AccountingComponent } from './accounting/accounting';

@NgModule({
	declarations: [DatabaseComponent,
    AccountingComponent],
	imports: [],
	exports: [DatabaseComponent,
    AccountingComponent]
})
export class ComponentsModule {}
