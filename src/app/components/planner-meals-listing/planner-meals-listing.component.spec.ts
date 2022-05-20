import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerMealsListingComponent } from './planner-meals-listing.component';

describe('PlannerMealsListingComponent', () => {
  let component: PlannerMealsListingComponent;
  let fixture: ComponentFixture<PlannerMealsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerMealsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerMealsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
