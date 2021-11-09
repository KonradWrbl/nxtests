import { Component } from '@angular/core';
import { TodoService } from '@testwp/shared/data-access';

@Component({
  selector: 'testwp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(public todoService: TodoService) {}

  addTodo() {
    const todoNo = Math.floor(Math.random() * 1000);
    this.todoService.addTodo({
      title: `New todo: ${todoNo}`,
      description: 'description' + todoNo,
    });
  }
}
