import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../classes/application';

@Component({
	selector: 'ace-app-full-detail',
	templateUrl: './app-full-detail.component.html',
	styleUrls: ['./app-full-detail.component.scss'],
})
export class AppFullDetailComponent implements OnInit {
	@Input()
	application: Application;
	constructor() {}

	ngOnInit() {}
}
