import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  // tslint:disable-next-line:no-output-rename
  @Output('addTodo') addTodoEmitter = new EventEmitter();


  newPlaceHolder = 'What needs to be done?';
  newTodo = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.addTodoEmitter.emit(this.newTodo);
    this.newTodo = '';
  }
}
