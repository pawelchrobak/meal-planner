import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, mapTo, switchMap, withLatestFrom } from 'rxjs/operators';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DbActions } from '../actions/db.actions';
import { UserActions } from '../actions/user.actions';
import { AppState } from '../reducers';
import { getUserUid } from '../selectors/user.selectors';

@Injectable()
export class RecipesEffects {
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccessful),
      switchMap(({ uid }) => {
        const recipes = collection(this.firestore, `users/${uid}/recipes`);
        return collectionData(recipes, { idField: 'uid' });
      }),
      map((recipes) => {
        return DbActions.recipesUpdated({ recipes: recipes as RecipeModel[] });
      })
    )
  );

  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DbActions.recipeAdd),
      withLatestFrom(this.store.pipe(select(getUserUid))),
      switchMap(([{ name }, uid]) => {
        const recipes = collection(this.firestore, `users/${uid}/recipes`);
        return from(addDoc(recipes, { name }));
      }),
      mapTo(DbActions.recipeAdded())
    )
  );

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DbActions.recipeDelete),
      withLatestFrom(this.store.pipe(select(getUserUid))),
      switchMap(([{ uid }, userUid]) => {
        const docRef = doc(this.firestore, `users/${userUid}/recipes/${uid}`);
        return from(deleteDoc(docRef));
      }),
      mapTo(DbActions.recipeDeleted())
    )
  );

  constructor(
    private actions$: Actions,
    private firestore: Firestore,
    private store: Store<AppState>
  ) {}
}
