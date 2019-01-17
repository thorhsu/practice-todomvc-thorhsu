import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todomvc';
  newPlaceHolder = 'What needs to be done?';
  newTodo = '';
  todos = [];

  addTodo() {
    this.todos.push(this.newTodo);
    console.log(this.todos);
    this.newTodo = '';
  }
}
