import { Component, OnInit } from '@angular/core';
import { RecipeRepository } from './infrastructure/RecipeRepository';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'cookbook';

	constructor(private recipeRepository: RecipeRepository) {

	}

	ngOnInit() {
		this.recipeRepository.fetchAll();
	}
}
