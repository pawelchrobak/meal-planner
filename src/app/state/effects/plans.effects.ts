import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
  CollectionReference,
} from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { format } from 'date-fns';
import { map, mapTo, switchMap, withLatestFrom } from 'rxjs/operators';
import { DayPlanModel } from 'src/app/models';
import { PlansActions } from '../actions/plans.actions';
import { AppState } from '../reducers';
import { getUserUid } from '../selectors/user.selectors';

@Injectable()
export class PlansEffects {
  loadPlan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlansActions.fetchPlannedMeals),
      withLatestFrom(this.store.pipe(select(getUserUid))),
      switchMap(([{ from, to }, userUid]) => {
        const dayPlans = collection(
          this.firestore,
          `users/${userUid}/plans/default/days`
        );
        const dayPlansQuery = query(
          dayPlans,
          where('date', '>=', from),
          where('date', '<=', to)
        );
        return collectionData(dayPlansQuery, { idField: 'uid' });
      }),
      map((dayPlans) => {
        return PlansActions.plansUpdated({
          dayPlans: dayPlans as DayPlanModel[],
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private firestore: Firestore,
    private store: Store<AppState>
  ) {}
}
