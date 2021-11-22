import { createReducer, on } from '@ngrx/store';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DbActions } from '../actions/db.actions';
import { UserActions } from '../actions/user.actions';

export interface DbState {
  recipes: RecipeModel[];
}

const initialState: DbState = {
  recipes: [],
};

export const dbReducer = createReducer(
  initialState,
  on(UserActions.logoutSuccessful, (state) => ({
    ...state,
    recipes: [],
  })),
  on(DbActions.recipesUpdated, (state, { recipes }) => ({
    ...state,
    recipes,
  }))
);
