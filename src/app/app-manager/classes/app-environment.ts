import { EnvironmentProperty } from './environment-property';

export class AppEnvironment {
	id: number | string;
	appId: number | string;
	name: string;
	environmentProps: EnvironmentProperty[];

	constructor(obj: any = {}) {
		this.id = obj.id ? obj.id : null;
		this.appId = obj.appId ? obj.appId : null;
		this.name = obj.name ? obj.name : '';
		this.environmentProps = obj.environmentProps
			? this.convertPropsArrayToClassInstances(obj.environmentProps)
			: [];
	}

	private convertPropsArrayToClassInstances(arr: any[]): EnvironmentProperty[] {
		const newArr: EnvironmentProperty[] = [];

		for (const item of arr) {
			newArr.push(new EnvironmentProperty(item));
		}

		return newArr;
	}
}
