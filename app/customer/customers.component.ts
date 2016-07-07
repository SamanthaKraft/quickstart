import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerComponent } from './customer.component';
import {CustomerService} from './customer.service'

@Component({

	selector:'app-customers',
	templateUrl:'app/customer/customers.component.html',
	directives: [CustomerComponent],
	providers: [CustomerService]

})
export class CustomersComponent implements OnInit {
customers: Promise<any[]>;

	constructor( private _customerService: CustomerService){ }

	ngOnInit(){ 
		this.customers = this._customerService.getCustomers()
			.catch((err) => {
				console.log(err); //don't do this, show user a nice message			
			})
	}
//async pipe likes promises or observables
//async does not work if you use any[] and .then(customers) in getcustomerservice 

//			RX observable version
	//	ngOnInit(){ 
	//	this.customers = this._customerService.getCustomers()
	//		.catch((err) => {
	//			console.log(err); //don't do this, show user a nice message
	//			return Observable.of(true); // now we eat it, only if the message has been communicated to the user
	//		})
	//}
}