import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { ListViewService } from './list-view.service';
import { Todo } from '../models/to-do.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [ ListViewService ]
})
export class ListViewComponent implements OnInit {

  columns: Array<PoTableColumn> = [];
  items: Array<Todo> = [];

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Completed', value: 'true' },
    { label: 'Not Completed', value: 'false' },
  ];

  constructor(
    private readonly todoService: TodoService,
    private readonly listViewService: ListViewService) { }

  ngOnInit(): void {
    this.retrieveAll();
    this.columns = this.listViewService.getColumns();
  }

  retrieveAll(): void {
    this.todoService.retrieveAll().subscribe(todos => {
      this.items = todos.map(this.convertPropertyToString)
    });
  }

  convertPropertyToString(todo: Todo): Todo {
    if (todo.completed == true) {
      todo.completed = 'true';
    } else {
      todo.completed = 'false'
    }
    return todo;
  }

}
