import { Component, OnInit } from '@angular/core';
import { Application } from '../classes/application';

@Component({
	selector: 'ace-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	public applicationList: Application[] = [
		{ name: 'Test App 1', details: 'Here are some details', serverDetails: 'here are some server details' },
		{ name: 'Test App 2', details: 'Here are some details', serverDetails: 'here are some server details' },
		{ name: 'Test App 2', details: 'Here are some details', serverDetails: 'here are some server details' },
		{ name: 'Test App 2', details: 'Here are some details', serverDetails: 'here are some server details' },
		{ name: 'Test App 2', details: 'Here are some details', serverDetails: 'here are some server details' },
		{ name: 'Test App 2', details: 'Here are some details', serverDetails: 'here are some server details' },
	];
	constructor() {}

	ngOnInit() {}
}
