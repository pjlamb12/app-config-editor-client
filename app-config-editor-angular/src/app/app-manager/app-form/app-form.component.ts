import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../classes/application';
import { AppManagerService } from '../app-manager.service';

@Component({
	selector: 'ace-app-form',
	templateUrl: './app-form.component.html',
	styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
	@Input()
	application: Application;
	public isSaving: boolean = false;

	constructor(private _appManagerService: AppManagerService) {}

	ngOnInit() {}
	saveApplication() {
		this.isSaving = true;
		const fn = this.application.id
			? this._appManagerService.editApplication
			: this._appManagerService.addApplication;

		fn(this.application).subscribe(
			(data: any) => {
				this.isSaving = false;
				console.log(data);
			},
			(error: any) => {
				this.isSaving = false;
				console.error(error);
			},
		);
	}
}
