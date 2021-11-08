import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../../libs/testapp/feature-list/src/lib/testapp-feature-list.module').then(m => m.TestappFeatureListModule),
  },
  {
    path: 'details',
    loadChildren: () => import('../../../../libs/testapp/feature-details/src/lib/testapp-feature-details.module').then(m => m.TestappFeatureDetailsModule)
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
