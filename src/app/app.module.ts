import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { DbTestComponent } from './components/db-test/db-test.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/effects/user.effects';
import { commonReducers } from './state/reducers';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginUiComponent } from './components';
import { MainViewComponent } from './components/main-view/main-view.component';
import { IngredientsMainComponent } from './components/ingredients-main/ingredients-main.component';
import { RecipesMainComponent } from './components/recipes-main/recipes-main.component';
import { PlannerMainComponent } from './components/planner-main/planner-main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

const effects = [UserEffects];

@NgModule({
  declarations: [
    AppComponent,
    DbTestComponent,
    NavMenuComponent,
    LoginUiComponent,
    MainViewComponent,
    IngredientsMainComponent,
    RecipesMainComponent,
    PlannerMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot(commonReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [{ provide: USE_DEVICE_LANGUAGE, useValue: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
