import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  title = 'Angular Signals Todo App';
  todoItems: Signal<TodoItem[]>;

  constructor(private todoService: TodoService) {
    this.todoItems = todoService.todoItems;
  }

  ngOnInit() {
    this.todoService.fetchTodoItems();
  }

  onDeleteTodo(todoItemId: string) {
    this.todoService.deleteTodo(todoItemId);
  }
}
