import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Application } from '../classes/application';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'ace-app-details',
	templateUrl: './app-details.component.html',
	styleUrls: ['./app-details.component.scss'],
})
export class AppDetailsComponent implements OnInit {
	constructor(private _route: ActivatedRoute) {}

	ngOnInit() {
		this._route.params.pipe(
			switchMap((params: Params) => {
				return params['id'] === 'add' ? of(new Application()) : of(new Application());
			}),
		);
	}
}
