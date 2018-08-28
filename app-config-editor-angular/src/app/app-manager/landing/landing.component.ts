import { Component, OnInit } from '@angular/core';
import { Application } from '../classes/application';

@Component({
	selector: 'ace-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	public applicationList: Application[] = [
		{
			id: '1',
			name: 'Test App 1',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		},
		{
			id: '2',
			name: 'Test App 2',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		},
		{
			id: '3',
			name: 'Test App 2',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		},
		{
			id: '4',
			name: 'Test App 2',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		},
		{
			id: '5',
			name: 'Test App 2',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		},
		{
			id: '6',
			name: 'Test App 2',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		},
	];
	constructor() {}

	ngOnInit() {}
}
