import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  services: [TodoService]
})
export class TodoComponent implements OnInit {
	todos;

  constructor() { }

  ngOnInit() {
  	this.todos = [
  		{
  			title: "First Todo",
  			text: "This will be the first todo item"
  		},
  		{
  			title: "Second todo",
  			text: "Here is the second todo!!!"
  		}
  	]
  }

}
