import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Application } from '../classes/application';
import { switchMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { AppManagerService } from '../app-manager.service';
import { AppEnvironment } from '../classes/app-environment';

@Component({
	selector: 'ace-app-details',
	templateUrl: './app-details.component.html',
	styleUrls: ['./app-details.component.scss'],
})
export class AppDetailsComponent implements OnInit {
	public application: Application;
	public appEnvironments: AppEnvironment[] = [];

	constructor(private _route: ActivatedRoute, private _appManagerService: AppManagerService) {}

	ngOnInit() {
		this._route.params
			.pipe(
				switchMap((params: Params) => {
					return params['id'] === 'add'
						? of([new Application(), []])
						: forkJoin(
								this._appManagerService.getApplicationById(params['id']),
								this._appManagerService.getAppEnvironmentList(params['id']),
						  );
				}),
			)
			.subscribe((data: any[]) => {
				this.application = data[0];
				this.appEnvironments = data[1];
			});
	}

	addAppEnvironment() {
		this.appEnvironments.push(new AppEnvironment({ appId: this.application.id }));
	}

	updateEnvironment(index: number, name: string) {
		console.log({ index, name });
		this.appEnvironments[index].name = name;
	}
}
