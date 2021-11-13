import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { authState } from 'rxfire/auth';
import { UserActions } from './state/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meal-planner';
  public user;

  constructor(public auth: Auth, private store: Store) {
    this.user = authState(this.auth);
  }

  public login() {
    this.store.dispatch(UserActions.loginCTA());
  }

  public logout() {
    this.store.dispatch(UserActions.logoutCTA());
  }
}
