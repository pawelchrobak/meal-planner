import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

const getUserState = (state: AppState) => state.user;

export const getUserUid = createSelector(getUserState, (user) => user.uid);

export const getPhotoURL = createSelector(
  getUserState,
  (user): string | null => user.photoURL
);
