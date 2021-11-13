import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';

export interface UserState {
  uid: string | null;
}

const initialState: UserState = {
  uid: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.logoutSuccessful, (state) => ({
    ...state,
    uid: null,
  })),
  on(UserActions.loginSuccessful, (state, { uid }) => ({
    ...state,
    uid,
  }))
);
