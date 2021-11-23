import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DbActions } from 'src/app/state/actions/db.actions';

@Component({
  selector: 'app-recipe-list-add-container',
  templateUrl: './recipe-list-add-container.component.html',
})
export class RecipeListAddContainerComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public add(name: string) {
    this.store.dispatch(DbActions.recipeAdd({ name }));
  }
}
