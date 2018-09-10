export class ToastMessage {
	message: string;
	level: string;
	dismissible: boolean;
	timeout: number;

	constructor(obj: any = {}) {
		this.message = obj.message || 'An unknown error occurred';
		this.level = obj.level || 'warning';
		this.dismissible = obj.dismissible || true;
		this.timeout = obj.timeout;
	}
}
