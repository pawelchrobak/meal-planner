import { createAction, props } from '@ngrx/store';

enum UserActionsEnum {
  loginCTA = '[User] Login CTA',
  loginSuccessful = '[User] Login Successful',
  logoutCTA = '[User] Logout CTA',
  logoutSuccessful = '[User] Logout Successful',
}

const loginCTA = createAction(UserActionsEnum.loginCTA);
const loginSuccessful = createAction(
  UserActionsEnum.loginSuccessful,
  props<{ uid: string; photoURL?: string }>()
);

const logoutCTA = createAction(UserActionsEnum.logoutCTA);
const logoutSuccessful = createAction(UserActionsEnum.logoutSuccessful);

export const UserActions = {
  loginCTA,
  loginSuccessful,
  logoutCTA,
  logoutSuccessful,
};
