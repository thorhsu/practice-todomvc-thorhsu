import { Component } from '@angular/core';

export interface Todo {
  id: number;
  todoNm: string;
  isCompleted: boolean;
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

  addTodo() {
    this.todos.push(
      {
        id: ++this.id,
        todoNm: this.newTodo,
        isCompleted: false
      }
    );
    this.newTodo = '';
  }
  toggleCompleted(todo: Todo) {
    console.log(todo);
    todo.isCompleted = !todo.isCompleted;
    console.log(this.todos);

  }
}
