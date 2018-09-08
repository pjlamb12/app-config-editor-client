import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { AppEnvironment } from '../classes/app-environment';
import { NgForOfContext } from '@angular/common';

@Component({
	selector: 'ace-environment-list',
	templateUrl: './environment-list.component.html',
	styleUrls: ['./environment-list.component.scss'],
})
export class EnvironmentListComponent implements OnInit {
	@Input()
	environments: AppEnvironment[];
	@ContentChild(TemplateRef)
	environmentTemplate: TemplateRef<NgForOfContext<AppEnvironment>>;
	constructor() {}

	ngOnInit() {}
}
