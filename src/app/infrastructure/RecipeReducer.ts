import * as Actions from './RecipeActions';
import { RecipeState } from './RecipeState';

const defaultState = new RecipeState();

export function recipeReducer(state: RecipeState = defaultState, action: Actions.Actions): RecipeState {

	switch (action.type) {

		case Actions.ActionTypes.FETCH_ALL_SUCCESS:
			return Object.assign(
				new RecipeState(),
				state,
				{
					recipes: action.payload,
					fetching: false,
					fetched: true
				}
			);

		case Actions.ActionTypes.SEARCH:
			return Object.assign(
				new RecipeState(),
				state,
				{
					searchValue: action.payload
				}
			);

		default:
			return state;

	}
}
