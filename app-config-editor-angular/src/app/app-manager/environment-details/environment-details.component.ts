import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AppManagerService } from '../app-manager.service';
import { AppEnvironment } from '../classes/app-environment';
import { EnvironmentProperty } from '../classes/environment-property';
import { ToasterService } from '../../toast-manager/toaster.service';
import { ToastMessage } from '../../toast-manager/toast-message';

@Component({
	selector: 'ace-environment-details',
	templateUrl: './environment-details.component.html',
	styleUrls: ['./environment-details.component.scss'],
})
export class EnvironmentDetailsComponent implements OnInit {
	public environment: AppEnvironment;
	isSaving: boolean;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _appManagerService: AppManagerService,
		private _toaster: ToasterService,
	) {}

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

	addToasterMessage(message: ToastMessage) {
		this._toaster.addMessage(message);
	}

	saveEnvironment() {
		this.isSaving = true;
		this._appManagerService.editAppEnvironment(this.environment).subscribe(
			(result: any) => {
				this.isSaving = false;
				this.addToasterMessage(
					new ToastMessage({
						message: `You successfully edited the ${this.environment.name} environment!`,
						level: 'success',
					}),
				);
				this._router.navigate(['/home']);
			},
			(error: any) => {
				this.isSaving = false;
				this.addToasterMessage(
					new ToastMessage({
						message: `An error occurred editing this environment! ${error.message || error.msg || ''}`,
						level: 'danger',
					}),
				);
			},
		);
	}
}
