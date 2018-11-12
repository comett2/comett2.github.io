import { Amount } from './Amount';

export class Ingredient {
	constructor(public readonly id: string,
				public readonly name: string,
				public readonly amount: Amount) {

	}
}