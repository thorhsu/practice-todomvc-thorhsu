import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  newPlaceHolder = 'What needs to be done?';
  newTodo = '';

  constructor() { }

  ngOnInit() {
  }

}
