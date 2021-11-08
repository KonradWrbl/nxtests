import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '@testwp/shared/data-access';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = new BehaviorSubject<Todo[]>([{ title: 'Todo 1', description: 'description1'}, { title: 'Todo 2', description: 'description2'}])

  addTodo(todo: Todo) {
    this.todos.next([...this.todos.getValue(), todo])
  }

  getTodoById(id: number) {
    return this.todos.getValue()[id]
  }
}
