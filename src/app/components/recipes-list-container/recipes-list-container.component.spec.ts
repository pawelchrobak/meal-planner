import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListContainerComponent } from './recipes-list-container.component';

describe('RecipesListContainerComponent', () => {
  let component: RecipesListContainerComponent;
  let fixture: ComponentFixture<RecipesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
