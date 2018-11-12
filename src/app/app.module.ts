import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule, BsDropdownModule, CarouselModule, ModalModule, TooltipModule } from 'ngx-bootstrap';
import { NavigationBarComponent } from './ui/nav/NavigationBarComponent';
import { SideBarComponent } from './ui/sidebar/SideBarComponent';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './infrastructure/RecipeEffects';
import { recipeReducer } from './infrastructure/RecipeReducer';
import { RecipeResource } from './infrastructure/RecipeResource';
import { RecipeRepository } from './infrastructure/RecipeRepository';
import { CardsComponent } from './ui/cards/CardsComponent';
import { CardComponent } from './ui/cards/card/CardComponent';
import { reducers } from './CookbookReducers';
import { SearchComponent } from './ui/search/SearchComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './ui/details/RecipeDetailComponent';
import { RecipesComponent } from './ui/recipes/RecipesComponent';
import { SocialLoginModule } from 'angularx-social-login';
import { getAuthServiceConfigs } from '../../socialloginConfig';
import { LoginComponent } from './login/LoginComponent';

const STORE_FEATURE = 'COOKBOOK';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
		ModalModule.forRoot(),
		BsDatepickerModule.forRoot(),
		StoreModule.forFeature(STORE_FEATURE, reducers),
		EffectsModule.forFeature([
			RecipeEffects
		]),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		// SocialLoginModule.initialize(getAuthServiceConfigs()),
	],
	declarations: [
		AppComponent,
		NavigationBarComponent,
		SideBarComponent,
		CardsComponent,
		CardComponent,
		SearchComponent,
		RecipeDetailComponent,
		RecipesComponent,
		// LoginComponent
	],
	providers: [
		{ provide: 'STORE_FEATURE', useValue: STORE_FEATURE},
		RecipeResource,
		RecipeRepository
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
