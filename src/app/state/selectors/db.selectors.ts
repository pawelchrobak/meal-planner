import { createSelector } from '@ngrx/store';
import { RecipeModel } from 'src/app/models';
import { AppState } from '../reducers';

const getDbState = (state: AppState) => state.db;

export const getRecipes = createSelector(
  getDbState,
  (db): RecipeModel[] => db.recipes
);
