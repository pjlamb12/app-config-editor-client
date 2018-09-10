import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Application } from './classes/application';
import { AppEnvironment } from './classes/app-environment';

@Injectable()
export class AppManagerService {
	private baseUrl: string = '';

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

	getApplicationList(): Observable<Application[]> {
		return this._http.get<Application[]>(`${this.baseUrl}/applications`);
	}
	getApplicationById(id: string | number): Observable<Application> {
		return this._http.get<Application>(`${this.baseUrl}/applications/${id}`);
	}

	addApplication(app: Application): Observable<any> {
		return this._http.post(`${this.baseUrl}/app-environments`, app);
	}

	editApplication(app: Application): Observable<any> {
		return this._http.put(`${this.baseUrl}/app-environments`, app);
	}

	getAppEnvironmentList(appId: string | number): Observable<AppEnvironment[]> {
		return this._http.get<AppEnvironment[]>(`${this.baseUrl}/applications/app-environments/${appId}`);
	}

	getAppEnvironmentById(envId: string | number): Observable<AppEnvironment> {
		return this._http.get<AppEnvironment>(`${this.baseUrl}/app-environments/${envId}`);
	}

	addAppEnvironment(appEnv: AppEnvironment): Observable<any> {
		return this._http.post(`${this.baseUrl}/app-environments`, appEnv);
	}

	editAppEnvironment(appEnv: AppEnvironment): Observable<any> {
		return this._http.put(`${this.baseUrl}/app-environments`, appEnv);
	}
}
