import { createReducer, on } from '@ngrx/store';
import { DayPlanModel } from 'src/app/models';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DbActions } from '../actions/db.actions';
import { PlansActions } from '../actions/plans.actions';
import { UserActions } from '../actions/user.actions';

export interface DbState {
  recipes: RecipeModel[];
  plans: {
    [planUid: string]: DayPlanModel[];
  };
}

const initialState: DbState = {
  recipes: [],
  plans: {},
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
  })),
  on(PlansActions.plansUpdated, (state, { dayPlans }) => ({
    ...state,
    plans: {
      ...state.plans,
      default: dayPlans,
    },
  }))
);
