import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RecipeRepository } from '../../infrastructure/RecipeRepository';
import { Recipe } from '../../domain/Recipe';

@Component({
	selector: 'sp-cards',
	templateUrl: `CardsComponent.html`,
	styleUrls: ['CardsComponent.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {

	recipes: any;

	constructor(private recipeRepository: RecipeRepository,
				private changeDetectorRef: ChangeDetectorRef) {

	}

	ngOnInit() {
		this.recipeRepository
			.select()
			.subscribe((recipes: Array<Recipe>) => {
				this.recipes = recipes;
				this.changeDetectorRef.detectChanges();
			});
	}
}
