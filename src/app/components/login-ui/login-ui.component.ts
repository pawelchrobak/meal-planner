import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
})
export class LoginUiComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public login() {
    this.store.dispatch(UserActions.loginCTA());
  }
}
