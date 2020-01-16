import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from './customer-list/filter-box.component';


@NgModule({
  declarations: [CustomerComponent, CustomerListComponent,FilterBoxComponent ],
  imports: [CommonModule],
  exports: [CustomerComponent]

})

export class CustomerModule {

}
