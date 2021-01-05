import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/to-do.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  _todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.todoService.retrieveAll().subscribe(todos => {
      this._todos = todos;
    });
  }

}
