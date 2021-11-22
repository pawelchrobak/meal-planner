import { IngredientModel } from '.';

export interface RecipeModel {
  uid?: string;
  name: string;
  ingredients?: IngredientModel[];
}
