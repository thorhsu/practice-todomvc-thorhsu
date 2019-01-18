import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { TNodeProviderIndexes } from '@angular/core/src/render3/interfaces/node';

export interface Todo {
  id: number;
  todoNm: string;
  isCompleted: boolean;
  isEditing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todomvc';
  todos: Todo[] = [];
  id = 0;
  allChecked = false;
  filterCondition = 'all';


  get uncompletedCounter() {
    return this.todos.filter((todo: Todo) => !todo.isCompleted).length;
  }

  addTodo(newTodo: string) {
    this.todos.push(
      {
        id: ++this.id,
        todoNm: newTodo,
        isCompleted: false,
        isEditing: false
      }
    );
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
