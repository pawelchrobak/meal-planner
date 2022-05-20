import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlansActions } from 'src/app/state/actions/plans.actions';

@Component({
  selector: 'app-planner-main',
  templateUrl: './planner-main.component.html',
  styleUrls: ['./planner-main.component.scss'],
})
export class PlannerMainComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PlansActions.fetchPlannedMeals({ from: 20211220, to: 20220102 }));
  }
}
