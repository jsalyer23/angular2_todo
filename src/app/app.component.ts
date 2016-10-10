import { Component } from '@angular/core';
import { TodoComponent } from "./todo/todo.component";
import { Todo } from "./todo/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [TodoComponent]
})
export class AppComponent {
  title = 'app works!';
}
