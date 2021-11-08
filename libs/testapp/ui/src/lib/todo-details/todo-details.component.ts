import { Component, Input } from '@angular/core';
import { Todo } from '@testwp/shared/data-access';

@Component({
  selector: 'testwp-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {
  @Input() todo: Todo = {title: '', description: ''}
}
