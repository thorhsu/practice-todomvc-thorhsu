import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

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
  newPlaceHolder = 'What needs to be done?';
  newTodo = '';
  todos: Todo[] = [];
  id = 0;
  allChecked = false;

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
  toggleCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
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

}
