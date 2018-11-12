import { Observable, of as observableOf } from 'rxjs';

import { catchError, first, map, switchMap } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import {
	ActionTypes,
	FetchAllAction,
	FetchAllSuccessAction,
	FetchAllFailureAction
} from './RecipeActions';
import { RecipeResource } from './RecipeResource';

@Injectable()
export class RecipeEffects {

	@Effect()
	fetch$ = this.actions$
						   .pipe(
							   ofType(ActionTypes.FETCH_ALL),
							   map((action: any) => action.payload),
							   switchMap((request) => {
								   return this.recipeResource
											  .getAllRecipes()
											  .pipe(
												  switchMap((response) => {
													  return of(new FetchAllSuccessAction(response));
												  })
											  );
							   })
						   );

	@Effect()
	search$ = this.actions$
						   .pipe(
							   ofType(ActionTypes.SEARCH),
							   map((action: any) => action.payload),
							   switchMap((request) => {
								   return this.recipeResource
											  .getAllRecipes()
											  .pipe(
												  switchMap((response) => {
													  return of(new FetchAllSuccessAction(response));
												  })
											  );
							   })
						   );


	constructor(private actions$: Actions,
				private store: Store<any>,
				private recipeResource: RecipeResource,
				@Inject('STORE_FEATURE') private storeFeature: string) {
	}
}
