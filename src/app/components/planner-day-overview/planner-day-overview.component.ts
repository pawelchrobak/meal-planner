import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DayPlanModel } from 'src/app/models';
import { ComponentChanges } from 'src/app/models/helpers.model';
import { AppState } from 'src/app/state/reducers';
import { getDayPlan } from 'src/app/state/selectors/db.selectors';

@Component({
  selector: 'app-planner-day-overview',
  templateUrl: './planner-day-overview.component.html',
  styleUrls: ['./planner-day-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerDayOverviewComponent implements OnChanges {
  @Input() public day!: number;
  @Input() public width: number = 100;

  public dayPlan$!: Observable<DayPlanModel>;

  constructor(private store: Store<AppState>) {}

  ngOnChanges(changes: ComponentChanges<PlannerDayOverviewComponent>): void {
    if (changes.day) {
      this.dayPlan$ = this.store.pipe(
        select(getDayPlan(changes.day.currentValue, 'default'))
      );
    }
  }

  debug(e: Event) {
    e.preventDefault();

    console.log(e);
  }

  debugAny(e: any) {
    console.log(e);
  }
}
