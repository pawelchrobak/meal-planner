import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-list-add',
  templateUrl: './recipe-list-add.component.html',
  styleUrls: ['./recipe-list-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListAddComponent {
  @Output() public add = new EventEmitter<string>();

  public name = new FormControl('');

  constructor() {}

  public addItem() {
    this.add.emit(this.name.value);
    this.name.reset();
  }
}
