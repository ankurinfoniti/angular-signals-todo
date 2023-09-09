import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  title = 'Angular Signals Todo App';
  todoItems: Signal<TodoItem[]>;
  todoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(private todoService: TodoService) {
    this.todoItems = todoService.todoItems;
  }

  onSubmit() {
    const todo = this.todoForm.value;

    this.todoService.saveTodo(todo as TodoItem);
    this.todoForm.reset();
  }

  onIsCompletedChange(data: any) {
    this.todoService.updateCompleted(data);
  }

  onDeleteTodo(todoItemId: number) {
    this.todoService.deleteTodo(todoItemId);
  }
}
