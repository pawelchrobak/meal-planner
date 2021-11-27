import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';

export interface UserState {
  uid: string | null;
  photoURL: string | null;
  redirect: string | null;
}

const initialState: UserState = {
  uid: null,
  photoURL: null,
  redirect: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.logoutSuccessful, (state) => ({
    ...state,
    uid: null,
  })),
  on(UserActions.loginSuccessful, (state, { uid, photoURL }) => ({
    ...state,
    uid,
    photoURL: photoURL || null,
  })),
  on(UserActions.saveRedirectRoute, (state, { path }) => ({
    ...state,
    redirect: path,
  })),
  on(UserActions.clearRedirectRoute, (state) => ({
    ...state,
    redirect: null,
  }))
);
