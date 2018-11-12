import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeState } from './RecipeState';
import { FetchAllAction, SearchAction, SearchSuccessAction } from './RecipeActions';
import { filter } from 'rxjs/internal/operators';
import { Recipe } from '../domain/Recipe';

@Injectable()
export class RecipeRepository {

	constructor(private store: Store<any>,
				@Inject('STORE_FEATURE') private storeFeature: string) {
	}

	fetchAll(): void {
		this.store.dispatch(new FetchAllAction());
	}

	select(): Observable<any> {
		return this.store.select(state => {
					   return state[this.storeFeature].recipes;
				   })
				   .pipe(
					   map((state: RecipeState) => {
						   return state.recipes.filter((recipe: Recipe) => recipe.name.toLowerCase().indexOf(state.searchValue) >= 0);
					   })
				   );
	}

	search(value: string): void {
		this.store.dispatch(new SearchAction(value));
	}
}
