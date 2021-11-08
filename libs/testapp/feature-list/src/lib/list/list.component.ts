import { Component } from '@angular/core';
import { Todo } from '@testwp/shared/data-access';

@Component({
  selector: 'testwp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  addTodo() {
    this.todos.push({ title: `New todo: ${Math.floor(Math.random() * 1000)}`})
  }

}
