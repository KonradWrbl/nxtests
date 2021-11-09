import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestappUiModule } from '@testwp/testapp/ui';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  imports: [CommonModule, TestappUiModule, RouterModule.forChild(routes)],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class TestappFeatureListModule {}
