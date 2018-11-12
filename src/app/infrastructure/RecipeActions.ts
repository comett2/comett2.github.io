import { Action } from '@ngrx/store';

const PREFIX = '[Objectives]';

export const ActionTypes = {
	FETCH_ALL: `${PREFIX}FETCH_ALL`,
	FETCH_ALL_SUCCESS: `${PREFIX}FETCH_ALL_SUCCESS`,
	FETCH_ALL_FAILURE: `${PREFIX}FETCH_ALL_FAILURE`,
	SEARCH: `${PREFIX}SEARCH`,
	SEARCH_SUCCESS: `${PREFIX}SEARCH_SUCCESS`,
};

export class FetchAllAction implements Action {
	type = ActionTypes.FETCH_ALL;

	constructor(public payload?: any) {
	}
}

export class FetchAllSuccessAction implements Action {
	type = ActionTypes.FETCH_ALL_SUCCESS;

	constructor(public payload?: any) {
	}
}

export class FetchAllFailureAction implements Action {
	type = ActionTypes.FETCH_ALL_FAILURE;

	constructor(public payload?: any) {
	}
}

export class SearchAction implements Action {
	type = ActionTypes.SEARCH;

	constructor(public payload?: any) {
	}
}

export class SearchSuccessAction implements Action {
	type = ActionTypes.SEARCH_SUCCESS;

	constructor(public payload?: any) {
	}
}

export type Actions =
	FetchAllAction |
	FetchAllSuccessAction |
	FetchAllFailureAction |
	SearchAction |
	SearchSuccessAction;
