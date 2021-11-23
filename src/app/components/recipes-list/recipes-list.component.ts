import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipeModel } from 'src/app/models';
import { DbActions } from 'src/app/state/actions/db.actions';
import { AppState } from 'src/app/state/reducers';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  @Input() public recipes: RecipeModel[] = [];

  constructor(private store: Store<AppState>) {}

  public delete(uid: string): void {
    this.store.dispatch(DbActions.recipeDelete({ uid }));
  }
}
