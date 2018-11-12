import { Ingredient } from './Ingredient';

export class Recipe {
	recipe = [
		{
			name: 'Kotlet schabowy',
			preparationTime: 30,
			image: 'some base 64',
			ingredients: [
				{
					name: 'Marchew',
					amount: {
						value: 20,
						type: 'DAG'
					}
				},
				{
					name: 'Seler',
					amount: {
						value: 1,
						type: 'ITEM'
					}
				},
				{
					name: 'Pieprz',
					amount: {
						value: 3,
						type: 'SPOON'
					}
				},
				{
					name: 'Mięso',
					amount: {
						value: 0.5,
						type: 'KG'
					}
				},
				{
					name: 'Sól',
					amount: {
						value: 10,
						type: 'G'
					}
				}
			]
		},
		{
			name: 'Ciasto marchewkowe',
			preparationTime: 60,
			image: 'some base 64',
			ingredients: [
				{
					name: 'Mąka',
					amount: {
						value: 50,
						type: 'DAG'
					}
				},
				{
					name: 'Jajko',
					amount: {
						value: 3,
						type: 'ITEM'
					}
				}
			]
		}
	];

	constructor(public readonly id: string,
				public readonly name: string,
				public readonly ingredients: Array<Ingredient>,
				public readonly preperationTime: number,
				public readonly image: string) {
	}

}


