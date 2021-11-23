import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListAddComponent } from './recipe-list-add.component';

describe('RecipeListAddComponent', () => {
  let component: RecipeListAddComponent;
  let fixture: ComponentFixture<RecipeListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
