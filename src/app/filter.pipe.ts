import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app.component';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], condition?: 'all' | 'active' | 'completed'): Todo[] {
    switch (condition) {
      case 'all':
         break;
      case 'active':
         return todos.filter((element: Todo) => !element.isCompleted);
      case 'completed':
         return todos.filter((element: Todo) => element.isCompleted);
      default:
         break;
    }
    return todos;
  }

}
