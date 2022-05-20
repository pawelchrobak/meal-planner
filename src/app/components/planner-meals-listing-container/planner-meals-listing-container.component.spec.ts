import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerMealsListingContainerComponent } from './planner-meals-listing-container.component';

describe('PlannerMealsListingContainerComponent', () => {
  let component: PlannerMealsListingContainerComponent;
  let fixture: ComponentFixture<PlannerMealsListingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerMealsListingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerMealsListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
