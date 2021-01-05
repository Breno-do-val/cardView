import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private BASE_URL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.BASE_URL);
  }
}
