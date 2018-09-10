import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../classes/application';
import { AppManagerService } from '../app-manager.service';
import { ToasterService } from '../../toast-manager/toaster.service';
import { ToastMessage } from '../../toast-manager/toast-message';

@Component({
	selector: 'ace-app-form',
	templateUrl: './app-form.component.html',
	styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
	@Input()
	application: Application;
	public isSaving: boolean = false;

	constructor(private _appManagerService: AppManagerService, private _toaster: ToasterService) {}

	ngOnInit() {}

	saveApplication() {
		this.isSaving = true;
		const fn = this.application.id
			? this._appManagerService.editApplication
			: this._appManagerService.addApplication;

		fn(this.application).subscribe(
			(data: any) => {
				this.isSaving = false;
				this.addToasterMessage(
					new ToastMessage({
						message: `You successfully ${this.application.id ? 'edited your' : 'added a new'} application!`,
						level: 'success',
					}),
				);
				console.log(data);
			},
			(error: any) => {
				this.isSaving = false;
				this.addToasterMessage(
					new ToastMessage({
						message: `An error occurred! ${error.message || error.msg || ''}`,
						level: 'danger',
					}),
				);
				console.error(error);
			},
		);
	}

	addToasterMessage(message: ToastMessage) {
		this._toaster.addMessage(message);
	}
}
