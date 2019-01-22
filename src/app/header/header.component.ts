import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public todoService: TodosServiceService) { }
  ngOnInit() {
  }
}
