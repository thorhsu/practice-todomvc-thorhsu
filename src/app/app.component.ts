import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { TNodeProviderIndexes } from '@angular/core/src/render3/interfaces/node';
import { TodosServiceService } from './todos-service.service';

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
  constructor(public todoService: TodosServiceService) {}
}
