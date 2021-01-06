import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PoTableColumn } from '@po-ui/ng-components';

import { Todo } from './../models/to-do.model';

@Injectable()
export class ListViewService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', type: 'number', width: '15%' },
      { property: 'completed',
        type: 'label',
        width: '75%',
        labels: [
          { value: 'true', color: 'color-11', label: 'Completed' },
          { value : 'false', color: 'color-8', label: 'Pendent'}
        ]
      }
    ];
  }

  private BASE_URL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private readonly httpClient: HttpClient) { }

  retrieveAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.BASE_URL);
  }
}