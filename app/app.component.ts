import {Component} from '@angular/core';

import { CustomerComponent } from './customer.component/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent]
})
export class AppComponent {
title = 'Customer App';
name = 'Ward';
wardsColor = 'blue';
customers = [
{id:1, name:'John'},
{id:2, name:'Sally'},
{id:3, name:'Nancy'},
{id:4, name:'Jamal'}
];
	changeSuiteColor(){
	this.wardsColor = this.wardsColor === 'blue'? 'red': 'blue';
	}
 }
