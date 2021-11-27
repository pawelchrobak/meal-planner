import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { authState } from 'rxfire/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserActions } from '../state/actions';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedInGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private router: Router,
    private store: Store
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return authState(this.auth).pipe(
      take(1),
      map((user) => {
        this.store.dispatch(UserActions.saveRedirectRoute({ path: state.url }));
        return !!user || this.router.parseUrl('/login');
      })
    );
  }
}
