import {Component} from '@angular/core';

import { CustomersComponent } from './customer/customers.component';


import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
title = 'Customer App';
name = 'Ward';
wardsColor = 'blue';

	changeSuiteColor(){
	this.wardsColor = this.wardsColor === 'blue'? 'red': 'blue';
	}
 }
