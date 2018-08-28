import { Component, OnInit } from '@angular/core';
import { Application } from '../classes/application';
import { AppManagerService } from '../app-manager.service';

@Component({
	selector: 'ace-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	public applicationList: Application[];
	constructor(private _appManagerService: AppManagerService) {}

	ngOnInit() {
		this._appManagerService.getApplicationList().subscribe((list: Application[]) => (this.applicationList = list));
	}
}
