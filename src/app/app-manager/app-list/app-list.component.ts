import { Component, OnInit, TemplateRef, ContentChild, Input } from '@angular/core';
import { NgForOfContext } from '@angular/common';
import { Application } from '../classes/application';

@Component({
	selector: 'ace-app-list',
	templateUrl: './app-list.component.html',
	styleUrls: ['./app-list.component.scss'],
})
export class AppListComponent implements OnInit {
	@Input()
	applications: Application[];
	@ContentChild(TemplateRef)
	applicationTemplate: TemplateRef<NgForOfContext<Application>>;
	constructor() {}

	ngOnInit() {}
}
