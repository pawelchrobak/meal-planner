import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, take, filter, switchMap, mapTo } from 'rxjs/operators';
import { UserActions } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loginUserCTA$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginCTA),
        tap(() => signInWithPopup(this.auth, new GoogleAuthProvider()))
      ),
    { dispatch: false }
  );

  successfulLogin$ = createEffect(() =>
    authState(this.auth).pipe(
      filter((user) => !!user),
      // @ts-ignore
      map((user) => UserActions.loginSuccessful({ uid: user.uid }))
    )
  );

  logoutUserCTA$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logoutCTA),
      tap(() => this.auth.signOut()),
      switchMap(() =>
        authState(this.auth).pipe(
          filter((user) => !user),
          take(1)
        )
      ),
      mapTo(UserActions.logoutSuccessful())
    )
  );

  constructor(private actions$: Actions, public auth: Auth) {}
}
