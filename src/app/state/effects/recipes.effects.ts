import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  collectionSnapshots,
} from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DbActions } from '../actions/db.actions';
import { UserActions } from '../actions/user.actions';

@Injectable()
export class RecipesEffects {
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccessful),
      switchMap(({ uid }) => {
        const recipes = collection(this.firestore, `users/${uid}/recipes`);
        console.log();
        return collectionData(recipes, { idField: 'uid' });
      }),
      map((recipes) => {
        return DbActions.recipesUpdated({ recipes: recipes as RecipeModel[] });
      })
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

  constructor(private actions$: Actions, private firestore: Firestore) {}
}
