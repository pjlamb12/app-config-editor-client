export class EnvironmentProperty {
	key: string;
	keyDisplay: string;
	value: string;

	constructor(obj: any = {}) {
		this.key = obj.key ? obj.key : '';
		this.keyDisplay = obj.keyDisplay ? obj.keyDisplay : '';
		this.value = obj.value ? obj.value : '';
	}
}
