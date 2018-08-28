import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Application } from '../classes/application';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppManagerService } from '../app-manager.service';

@Component({
	selector: 'ace-app-details',
	templateUrl: './app-details.component.html',
	styleUrls: ['./app-details.component.scss'],
})
export class AppDetailsComponent implements OnInit {
	public application: Application;
	constructor(private _route: ActivatedRoute, private _appManagerService: AppManagerService) {}

	ngOnInit() {
		this._route.params
			.pipe(
				switchMap((params: Params) => {
					return params['id'] === 'add'
						? of(new Application())
						: this._appManagerService.getApplicationById(params['id']);
				}),
			)
			.subscribe((app: Application) => {
				this.application = app;
			});
	}
}
