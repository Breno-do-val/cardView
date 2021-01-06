import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { ListViewService } from './list-view.service';
import { Todo } from '../models/to-do.model';

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
    private readonly listViewService: ListViewService
  ) { }

  ngOnInit(): void {
    this.retrieveAll();
    this.columns = this.listViewService.getColumns();
  }

  /**
   * The property 'completed' has to be converted to string
   */
  retrieveAll(): void {
    this.listViewService.retrieveAll().subscribe(todos => {
      this.items = todos.map(this.convertPropertyToString)
    });
  }

  /**
   * 
   * @param todo Model to be transformed
   */
  convertPropertyToString(todo: Todo): any {
    let newTodo = { 
      id: todo.id,
      title: todo.title,
      completed: todo.completed.toString()
    }
    return newTodo;
  }

}
