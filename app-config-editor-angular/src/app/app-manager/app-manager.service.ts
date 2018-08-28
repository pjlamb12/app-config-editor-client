import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Application } from './classes/application';

@Injectable()
export class AppManagerService {
	private applicationList: Application[] = [
		new Application({
			id: '1',
			name: 'Test App 1',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
		new Application({
			id: '2',
			name: 'Test App 2',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
		new Application({
			id: '3',
			name: 'Test App 3',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
		new Application({
			id: '4',
			name: 'Test App 4',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
		new Application({
			id: '5',
			name: 'Test App 5',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
		new Application({
			id: '6',
			name: 'Test App 6',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
	];

	constructor(private _http: HttpClient) {}

	getApplicationList() {
		return of(this.applicationList);
	}

	getApplicationById(id: string) {
		return of(this.applicationList.find((app: Application) => app.id === id));
	}
}
