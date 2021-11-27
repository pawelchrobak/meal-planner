import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  map,
  tap,
  take,
  filter,
  switchMap,
  mapTo,
  withLatestFrom,
} from 'rxjs/operators';
import { UserActions } from '../actions/user.actions';
import { AppState } from '../reducers';
import { getRedirectionPath } from '../selectors/user.selectors';

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
      map((user) => {
        const payload = {
          uid: user?.uid,
          ...(user?.photoURL ? { photoURL: user.photoURL } : {}),
        };
        // @ts-ignore
        return UserActions.loginSuccessful(payload);
      })
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

  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccessful),
      withLatestFrom(this.store.pipe(select(getRedirectionPath))),
      tap(([_, path]) => {
        this.router.navigate([path || '/planner']);
      }),
      mapTo(UserActions.clearRedirectRoute())
    )
  );

  redirectAfterLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logoutSuccessful),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private auth: Auth,
    private router: Router,
    private store: Store<AppState>
  ) {}
}
