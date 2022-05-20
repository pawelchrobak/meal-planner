import { createAction, props } from '@ngrx/store';
import { DayPlanModel } from 'src/app/models';

enum PlansActionsEnum {
  // recipesUpdated = '[DB] Recipes updated',
  // recipeAdd = '[DB] Add recipe',
  // recipeAdded = '[DB] Recipe added',
  // recipeDelete = '[DB] Delete recipe',
  // recipeDeleted = '[DB] Recipe deleted',
  fetchPlannedMeals = '[DB] Fetch planned meals',
  plansUpdated = '[DB] Plans updated',
}

const fetchPlannedMeals = createAction(
  PlansActionsEnum.fetchPlannedMeals,
  props<{ from: number; to: number }>()
);

const plansUpdated = createAction(
  PlansActionsEnum.plansUpdated,
  props<{ dayPlans: DayPlanModel[] }>()
);

export const PlansActions = {
  fetchPlannedMeals,
  plansUpdated
};
