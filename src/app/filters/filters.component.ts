import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  // @Output() clearCompleted = new EventEmitter();

  constructor(public todoService: TodosServiceService) { }

  ngOnInit() {
  }
  // clearCompletedEmit() {
  //   this.clearCompleted.emit();
  // }
}
