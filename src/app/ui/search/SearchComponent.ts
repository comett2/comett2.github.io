import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeRepository } from '../../infrastructure/RecipeRepository';

@Component({
	selector: 'sp-search',
	templateUrl: `SearchComponent.html`,
	styleUrls: ['SearchComponent.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

	private searchForm: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private recipeRepository: RecipeRepository) {

	}

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			'value': ['', []]
		});
		this.searchForm.get('value').valueChanges.subscribe(val => {
			this.recipeRepository.search(val);
		});
	}


}
