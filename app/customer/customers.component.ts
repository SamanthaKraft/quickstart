import { Component, OnInit } from '@angular/core';

import { CustomerComponent } from './customer.component';

import {CustomerService} from './customer.service'

@Component({

	selector:'app-customers',
	templateUrl:'app/customer/customers.component.html',
	directives: [CustomerComponent],
	providers: [CustomerService]

})
export class CustomersComponent implements OnInit {
customer: any[];

	constructor( private _customerService: CustomerService){ }

	ngOnInit(){ 
	this.customers = this._customerService.getCustomers();
	}
}