import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';
import { RecipeRepository } from '../../infrastructure/RecipeRepository';
import { Recipe } from '../../domain/Recipe';

@Component({
	selector: 'sp-recipe-detail',
	templateUrl: `RecipeDetailComponent.html`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailComponent implements OnInit {

	recipe: Recipe;

	constructor(private route: ActivatedRoute,
				private recipeRepository: RecipeRepository,
				private changeDetectorRef: ChangeDetectorRef) {

	}

	ngOnInit() {
		this.route.paramMap
			.subscribe((params: ParamMap) => {
				this.recipeRepository
					.selectOne(params.get('id'))
					.subscribe((recipe: Recipe) => {
						this.recipe = recipe;
						this.changeDetectorRef.detectChanges();
					});
			});
	}
}
