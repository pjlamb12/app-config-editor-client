import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Application } from './classes/application';
import { AppEnvironment } from './classes/app-environment';

@Injectable()
export class AppManagerService {
	private applicationList: Application[] = [
		new Application({
			id: '1',
			name: 'Test App 1',
			details: 'Here are some details',
			serverDetails: 'here are some server details',
		}),
	];

	private appEnvironmentList: AppEnvironment[] = [
		new AppEnvironment({
			id: '1',
			appId: '1',
			name: 'Testing',
		}),
	];

	constructor(private _http: HttpClient) {}

	getApplicationList() {
		return of(this.applicationList);
	}

	getAppEnvironmentList(appId: string | number) {
		return of(this.appEnvironmentList.filter((env: AppEnvironment) => env.appId === appId));
	}

	getAppEnvironmentById(envId: string | number) {
		return of(this.appEnvironmentList.find((env: AppEnvironment) => env.id === envId));
	}

	getApplicationById(id: string | number) {
		return of(this.applicationList.find((app: Application) => app.id === id));
	}

	addApplication(app: Application) {
		const nextId = this.applicationList.length + 1;
		app.id = '' + nextId;
		this.applicationList.push(app);

		return of({ success: true });
	}

	editApplication(app: Application) {
		const idx = this.applicationList.findIndex((appl: Application) => app.id === appl.id);
		if (idx > -1) {
			this.applicationList[idx] = app;
		}
		return of({ success: true });
	}
}
