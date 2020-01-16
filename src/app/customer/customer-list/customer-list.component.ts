// tslint:disable-next-line: import-spacing
import   {Component, OnInit, Input} from '@angular/core';
import { ICustomer } from 'src/app/shared/inferfaces';
@Component({
  selector: 'app-customer-list',
  templateUrl: '../customer-list/customer-list.component.html'
})

export class CustomerListComponent implements OnInit {

  private _customers: ICustomer[] = [];

  filteredCustomers: ICustomer[];
  customersOrderTotal:number;
  

  @Input() get customers(): ICustomer[] {
    return this._customers
  }
  set customers(value: ICustomer[]) {
    if(value) {
    this.filteredCustomers = this._customers = value;
    this.calculateOrders();
    }
  }
  ngOnInit() {
    console.log(this.filteredCustomers);
  }

  calculateOrders = () => {

    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer:ICustomer)=>  {
      this.customersOrderTotal += customer.orderTotal;
    })
  } 

}
