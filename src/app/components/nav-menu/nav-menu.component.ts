import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public logout() {
    this.store.dispatch(UserActions.logoutCTA());
  }
}
