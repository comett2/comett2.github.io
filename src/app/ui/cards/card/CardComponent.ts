import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Recipe } from '../../../domain/Recipe';
import { Router } from '@angular/router';

@Component({
	selector: 'sp-card',
	templateUrl: `CardComponent.html`,
	styleUrls: ['CardComponent.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

	@Input()
	recipe: Recipe;

	constructor(private router: Router) {

	}

	ngOnInit() {

	}


	addRecipe(): void {
		alert('I tak Cie Kocham');
	}

	goToDetails() {
		this.router.navigate(['recipe'], { queryParams: { id: this.recipe.id } });
	}
}
