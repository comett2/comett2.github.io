import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './ui/details/RecipeDetailComponent';
import { RecipesComponent } from './ui/recipes/RecipesComponent';
import { LoginComponent } from './login/LoginComponent';

const routes: Routes = [
	// { path: 'login',      component: LoginComponent },
	{ path: 'recipes',      component: RecipesComponent },
	{ path: 'recipe/:id',      component: RecipeDetailComponent },
	{ path: '**', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
