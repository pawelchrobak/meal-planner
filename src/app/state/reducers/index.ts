import { userReducer, UserState } from './user.reducer';
export * from './user.reducer';
import { routerReducer } from '@ngrx/router-store';
import { dbReducer, DbState } from './db.reducer';

export interface AppState {
  user: UserState;
  db: DbState;
}

export const commonReducers = {
  user: userReducer,
  router: routerReducer,
  db: dbReducer,
};
