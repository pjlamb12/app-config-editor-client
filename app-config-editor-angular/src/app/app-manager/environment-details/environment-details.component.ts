import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AppManagerService } from '../app-manager.service';
import { AppEnvironment } from '../classes/app-environment';
import { EnvironmentProperty } from '../classes/environment-property';

@Component({
	selector: 'ace-environment-details',
	templateUrl: './environment-details.component.html',
	styleUrls: ['./environment-details.component.scss'],
})
export class EnvironmentDetailsComponent implements OnInit {
	public environment: AppEnvironment;
	constructor(private _route: ActivatedRoute, private _appManagerService: AppManagerService) {}

	ngOnInit() {
		this._route.params
			.pipe(
				switchMap((params: Params) => {
					return this._appManagerService.getAppEnvironmentById(params['environmentId']);
				}),
			)
			.subscribe((env: AppEnvironment) => (this.environment = env));
	}

	addEnvironmentProp() {
		this.environment.environmentProps.push(new EnvironmentProperty());
	}

	removeEnvironmentProp(idx: number) {
		this.environment.environmentProps.splice(idx, 1);
	}
}
