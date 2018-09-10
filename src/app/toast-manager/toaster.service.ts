import { Injectable } from '@angular/core';
import { ToastMessage } from './toast-message';
import { Subject } from 'rxjs';

@Injectable()
export class ToasterService {
	private messages: ToastMessage[] = [];
	public messagesSubject: Subject<ToastMessage[]> = new Subject<ToastMessage[]>();
	constructor() {}

	updateSubject() {
		this.messagesSubject.next(this.messages);
	}

	addMessage(message: ToastMessage) {
		this.messages.push(message);
		this.updateSubject();
	}

	removeMessage(idx: number) {
		this.messages.splice(idx, 1);
		this.updateSubject();
	}

	clearAllMessages() {
		this.messages = [];
		this.updateSubject();
	}
}
