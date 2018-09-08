export class EnvironmentProperty {
	key: string;
	value: string;

	constructor(obj: any = {}) {
		this.key = obj.key ? obj.key : '';
		this.value = obj.value ? obj.value : '';
	}
}
