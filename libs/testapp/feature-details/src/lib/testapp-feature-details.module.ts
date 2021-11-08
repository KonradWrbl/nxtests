import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { TestappUiModule } from '@testwp/testapp/ui';

const routes: Routes = [
  {
    path: ':id',
    component: DetailsComponent,
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TestappUiModule],
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ],
})
export class TestappFeatureDetailsModule {}
