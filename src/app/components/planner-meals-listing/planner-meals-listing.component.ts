import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models';

@Component({
  selector: 'app-planner-meals-listing',
  templateUrl: './planner-meals-listing.component.html',
  styleUrls: ['./planner-meals-listing.component.scss'],
})
export class PlannerMealsListingComponent implements OnInit {
  @Input() recipes: RecipeModel[];

  ngOnInit(): void {}

  debug(a: any) {
    console.log(a);
  }
}
