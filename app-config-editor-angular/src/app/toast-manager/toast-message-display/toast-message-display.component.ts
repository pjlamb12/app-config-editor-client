import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { ToastMessage } from '../toast-message';
import { Subject } from 'rxjs';

@Component({
	selector: 'ace-toast-message-display',
	templateUrl: './toast-message-display.component.html',
	styleUrls: ['./toast-message-display.component.scss'],
})
export class ToastMessageDisplayComponent implements OnInit {
	public messagesSubject: Subject<ToastMessage[]>;
	constructor(private _toaster: ToasterService) {}

	ngOnInit() {
		this.messagesSubject = this._toaster.messagesSubject;
	}

	onAlertDismissed(idx: number) {
		console.log('idx: ', idx);
		this._toaster.removeMessage(idx);
	}
}
