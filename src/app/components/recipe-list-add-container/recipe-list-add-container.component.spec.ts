import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListAddContainerComponent } from './recipe-list-add-container.component';

describe('RecipeListAddContainerComponent', () => {
  let component: RecipeListAddContainerComponent;
  let fixture: ComponentFixture<RecipeListAddContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListAddContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
