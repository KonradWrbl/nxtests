import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TestappFeatureListModule } from '@testwp/testapp/feature-list';

const routes: Routes = [
  {path: '',
    loadChildren: () => import('../../../../libs/testapp/feature-list/src/lib/testapp-feature-list.module').then(m => m.TestappFeatureListModule)
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
