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
import { from, of } from 'rxjs';
import { map, mapTo, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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

  // loginUserCTA$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(UserActions.loginCTA),
  //       tap(() => signInWithPopup(this.auth, new GoogleAuthProvider()))
  //     ),
  //   { dispatch: false }
  // );

  // successfulLogin$ = createEffect(() =>
  //   authState(this.auth).pipe(
  //     filter((user) => !!user),
  //     // @ts-ignore
  //     map((user) => UserActions.loginSuccessful({ uid: user.uid }))
  //   )
  // );

  // logoutUserCTA$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UserActions.logoutCTA),
  //     tap(() => this.auth.signOut()),
  //     switchMap(() =>
  //       authState(this.auth).pipe(
  //         filter((user) => !user),
  //         take(1)
  //       )
  //     ),
  //     mapTo(UserActions.logoutSuccessful())
  //   )
  // );

  // redirectAfterLogin$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(UserActions.loginSuccessful),
  //       tap(() => {
  //         this.router.navigate(['/planner']);
  //       })
  //     ),
  //   { dispatch: false }
  // );

  // redirectAfterLogout$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(UserActions.logoutSuccessful),
  //       tap(() => {
  //         this.router.navigate(['/login']);
  //       })
  //     ),
  //   { dispatch: false }
  // );

  constructor(
    private actions$: Actions,
    private firestore: Firestore,
    private store: Store<AppState>
  ) {}
}
