import { createAction, props } from '@ngrx/store';

enum UserActionsEnum {
  loginCTA = '[User] Login CTA',
  loginSuccessful = '[User] Login Successful',
  logoutCTA = '[User] Logout CTA',
  logoutSuccessful = '[User] Logout Successful',
  saveRedirectRoute = '[User] Save redirect route',
  clearRedirectRoute = '[User] Clear redirect route',
}

const loginCTA = createAction(UserActionsEnum.loginCTA);
const loginSuccessful = createAction(
  UserActionsEnum.loginSuccessful,
  props<{ uid: string; photoURL?: string }>()
);

const logoutCTA = createAction(UserActionsEnum.logoutCTA);
const logoutSuccessful = createAction(UserActionsEnum.logoutSuccessful);

const saveRedirectRoute = createAction(
  UserActionsEnum.saveRedirectRoute,
  props<{ path: string }>()
);
const clearRedirectRoute = createAction(UserActionsEnum.clearRedirectRoute);

export const UserActions = {
  loginCTA,
  loginSuccessful,
  logoutCTA,
  logoutSuccessful,
  saveRedirectRoute,
  clearRedirectRoute,
};
