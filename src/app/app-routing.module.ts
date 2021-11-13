import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbTestComponent, LoginUiComponent } from './components';
import { IngredientsMainComponent } from './components/ingredients-main/ingredients-main.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PlannerMainComponent } from './components/planner-main/planner-main.component';
import { RecipesMainComponent } from './components/recipes-main/recipes-main.component';
import { UserLoggedInGuard } from './guards/user-logged-in.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginUiComponent,
  },
  {
    path: '',
    component: MainViewComponent,
    children: [
      { path: 'recipes', component: RecipesMainComponent },
      { path: 'planner', component: PlannerMainComponent },
      { path: 'ingredients', component: IngredientsMainComponent },
      { path: 'test', component: DbTestComponent },
    ],
    canActivate: [UserLoggedInGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
