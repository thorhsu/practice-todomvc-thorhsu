import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  _filterCondition: 'all' | 'completed' | 'active';
  @Input() todos: Todo[];
  @Input() uncompletedCounter: number;
  @Output() filterConditionChange = new EventEmitter();
  @Input() get filterCondition() {
    return this._filterCondition;
  }
  @Output() clearCompleted = new EventEmitter();
  set filterCondition(filterCondition: 'all' | 'completed' | 'active') {
    this._filterCondition = filterCondition;
    this.filterConditionChange.emit(this._filterCondition);
  }

  constructor() { }

  ngOnInit() {
  }

  clearCompletedEmitter() {
    this.clearCompleted.emit();
  }


}
