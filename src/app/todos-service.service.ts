import { Injectable } from '@angular/core';
import { Todo } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  constructor() { }
  newPlaceHolder = 'What needs to be done?';
  todos: Todo[] = [];
  newTodo: string;
  id = 0;
  title = 'Todomvc';
  allChecked = false;
  filterCondition: 'all' | 'completed' | 'active' = 'all';

  addTodo() {
    this.todos.push(
      {
        id: ++this.id,
        todoNm: this.newTodo,
        isCompleted: false,
        isEditing: false
      }
    );
    this.newTodo = '';
  }

  get uncompletedCounter() {
    return this.todos.filter((todo: Todo) => !todo.isCompleted).length;
  }

  toggleCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todos = [...this.todos];
  }
  deleteTodo(todo: Todo) {
    // tslint:disable-next-line:no-shadowed-variable
    this.todos = this.todos.filter((element: Todo) => element.id !== todo.id);
  }
  toggleAllCompleted() {
    // tslint:disable-next-line:no-shadowed-variable
    this.allChecked = !this.allChecked;
    this.todos = this.todos.map((element: Todo) => ({...element, isCompleted: this.allChecked}));
  }
  setTodoEditing(todo: Todo) {
    todo.isEditing = true;
  }
  clearCompleted() {
    this.todos = this.todos.filter((element: Todo) => !element.isCompleted);
  }
}
