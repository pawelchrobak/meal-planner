import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerCarouselContainerComponent } from './planner-carousel-container.component';

describe('PlannerCarouselContainerComponent', () => {
  let component: PlannerCarouselContainerComponent;
  let fixture: ComponentFixture<PlannerCarouselContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerCarouselContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerCarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
