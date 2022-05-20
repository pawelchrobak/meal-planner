import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerCarouselComponent } from './planner-carousel.component';

describe('PlannerCarouselComponent', () => {
  let component: PlannerCarouselComponent;
  let fixture: ComponentFixture<PlannerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
