import { EnvironmentProperty } from './environment-property';

export class AppEnvironment {
	name: string;
	environmentProps: EnvironmentProperty[];

	constructor(obj: any = {}) {
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
