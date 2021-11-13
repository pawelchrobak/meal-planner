import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsMainComponent } from './ingredients-main.component';

describe('IngredientsMainComponent', () => {
  let component: IngredientsMainComponent;
  let fixture: ComponentFixture<IngredientsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
