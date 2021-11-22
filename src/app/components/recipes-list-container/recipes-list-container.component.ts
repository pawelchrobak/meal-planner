import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from 'src/app/models';
import { AppState } from 'src/app/state/reducers';
import { getRecipes } from 'src/app/state/selectors/db.selectors';

@Component({
  selector: 'app-recipes-list-container',
  templateUrl: './recipes-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListContainerComponent implements OnInit {
  public recipes$: Observable<RecipeModel[]>;

  constructor(public store: Store<AppState>) {
    this.recipes$ = this.store.pipe(select(getRecipes));
  }

  ngOnInit(): void {}
}
