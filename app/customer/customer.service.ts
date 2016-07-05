import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
constructor(){ }
getCustomers(){
	return [
	{id:1, name:'John'},
	{id:2, name:'Sally'},
	{id:3, name:'Nancy'},
	{id:4, name:'Jamal'}
	];
}
}