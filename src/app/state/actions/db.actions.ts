import { createAction, props } from '@ngrx/store';
import { RecipeModel } from 'src/app/models/recipe.model';

enum DbActionsEnum {
  recipesUpdated = '[DB] Recipes updated',
}

const recipesUpdated = createAction(
  DbActionsEnum.recipesUpdated,
  props<{ recipes: RecipeModel[] }>()
);

export const DbActions = {
  recipesUpdated,
};
