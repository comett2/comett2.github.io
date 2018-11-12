import { Recipe } from '../domain/Recipe';
import { State } from './State';

export class RecipeState extends State {

	recipes: Array<Recipe> = [];

	searchValue = '';
}
