import { createAction, props } from '@ngrx/store';
import { RecipeModel } from 'src/app/models/recipe.model';

enum DbActionsEnum {
  recipesUpdated = '[DB] Recipes updated',
  recipeAdd = '[DB] Add recipe',
  recipeAdded = '[DB] Recipe added',
  recipeDelete = '[DB] Delete recipe',
  recipeDeleted = '[DB] Recipe deleted',
}

const recipesUpdated = createAction(
  DbActionsEnum.recipesUpdated,
  props<{ recipes: RecipeModel[] }>()
);

const recipeAdd = createAction(
  DbActionsEnum.recipeAdd,
  props<{ name: string }>()
);

const recipeAdded = createAction(DbActionsEnum.recipeAdded);

const recipeDelete = createAction(
  DbActionsEnum.recipeDelete,
  props<{ uid: string }>()
);

const recipeDeleted = createAction(DbActionsEnum.recipeDeleted);

export const DbActions = {
  recipesUpdated,
  recipeAdd,
  recipeAdded,
  recipeDelete,
  recipeDeleted
};
