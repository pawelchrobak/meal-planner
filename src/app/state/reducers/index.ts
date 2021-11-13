import { userReducer, UserState } from './user.reducer';
export * from './user.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  user: UserState;
}

export const commonReducers = {
  user: userReducer,
  router: routerReducer
};
