import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TodosComponent,
    TodoDetailsComponent
  ],
  exports: [
    TodosComponent,
    TodoDetailsComponent
  ],
})
export class TestappUiModule {}
