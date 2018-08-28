import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../classes/application';

@Component({
	selector: 'ace-app-full-detail-card',
	templateUrl: './app-full-detail-card.component.html',
	styleUrls: ['./app-full-detail-card.component.scss'],
})
export class AppFullDetailComponent implements OnInit {
	@Input()
	application: Application;
	constructor() {}

	ngOnInit() {}
}
