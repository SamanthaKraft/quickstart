import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
title = 'Customer App';
name = 'Ward';
wardsColor = 'blue';

	changeSuiteColor(){
	this.wardsColor = this.wardsColor === 'blue'? 'red': 'blue';
	}
 }
