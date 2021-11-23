import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListItemComponent implements OnInit {
  @Input() public name: string = '';
  @Output() public delete = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public remove(): void {
    this.delete.emit();
  }
}
