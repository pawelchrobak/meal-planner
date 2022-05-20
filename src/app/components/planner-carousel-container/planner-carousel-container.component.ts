import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DayPlanModel } from 'src/app/models';
import { AppState } from 'src/app/state/reducers';
import { getPlan } from 'src/app/state/selectors/db.selectors';

@Component({
  selector: 'app-planner-carousel-container',
  template:
    '<app-planner-carousel [dayPlans]="(dayPlans$ | async) || []"></app-planner-carousel>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerCarouselContainerComponent {
  public dayPlans$: Observable<DayPlanModel[]>;

  constructor(private store: Store<AppState>) {
    this.dayPlans$ = this.store.pipe(select(getPlan('default')));
  }
}
