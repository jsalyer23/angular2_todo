import { Injectable } from '@angular/core';
import { Todo } from "./todo/todo";

@Injectable()
export class TodoService {

  constructor() { }
  
  getTodos() {
  	return [
  		{
  			title: "First Todo",
  			text: "This will be the first todo item"
  		},
  		{
  			title: "Second todo",
  			text: "Here is the second todo!!!"
  		}
  	];
  }

}
