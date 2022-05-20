import { createSelector } from '@ngrx/store';
import { RecipeModel } from 'src/app/models';
import { AppState } from '../reducers';

const getDbState = (state: AppState) => state.db;

export const getRecipes = createSelector(
  getDbState,
  (db): RecipeModel[] => db.recipes
);

export const getPlans = createSelector(getDbState, (db) => db.plans);

export const getPlan = (uid: string) =>
  createSelector(getPlans, (plans) => plans[uid] || []);

export const getDayPlan = (date: number, planUid: string) =>
  createSelector(
    getPlan(planUid),
    (plan) => plan.find((dayPlan) => dayPlan.date === date) || { date }
  );
