export class Application {
	id: string;
	name: string;
	details: string;
	serverDetails: string;

	constructor(obj: any = {}) {
		this.id = obj.id ? obj.id : null;
		this.name = obj.name ? obj.name : '';
		this.details = obj.details ? obj.details : '';
		this.serverDetails = obj.serverDetails ? obj.serverDetails : '';

		return this;
	}
}
