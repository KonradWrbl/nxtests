import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '@testwp/shared/data-access';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'testwp-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  todo: Todo = {title: '', description: ''};

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
  }

  ngOnInit() {
    this.route.params.subscribe(res => this.todo = this.todoService.getTodoById(res.id));
  }
}
