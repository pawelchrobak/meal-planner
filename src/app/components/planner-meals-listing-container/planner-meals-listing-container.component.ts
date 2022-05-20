import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from 'src/app/models';
import { AppState, getRecipes } from 'src/app/state';

@Component({
  selector: 'app-planner-meals-listing-container',
  template: `<app-planner-meals-listing
    [recipes]="(recipes$ | async) || []"
  ></app-planner-meals-listing>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerMealsListingContainerComponent {
  public recipes$: Observable<RecipeModel[]>;

  constructor(private store: Store<AppState>) {
    this.recipes$ = this.store.pipe(select(getRecipes));
  }
}
