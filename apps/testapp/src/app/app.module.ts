import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@testwp/testapp/feature-list').then(
        (m) => m.TestappFeatureListModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@testwp/testapp/feature-details').then(
        (m) => m.TestappFeatureDetailsModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
