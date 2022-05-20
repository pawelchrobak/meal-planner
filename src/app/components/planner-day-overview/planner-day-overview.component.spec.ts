import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerDayOverviewComponent } from './planner-day-overview.component';

describe('PlannerDayOverviewComponent', () => {
  let component: PlannerDayOverviewComponent;
  let fixture: ComponentFixture<PlannerDayOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerDayOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerDayOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
