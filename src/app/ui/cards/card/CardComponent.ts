import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Recipe } from '../../../domain/Recipe';

@Component({
	selector: 'sp-card',
	templateUrl: `CardComponent.html`,
	styleUrls: ['CardComponent.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

	@Input()
	recipe: Recipe;

	constructor() {

	}

	ngOnInit() {

	}


}
