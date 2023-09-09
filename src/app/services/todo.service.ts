import { Injectable, computed, signal } from '@angular/core';

import { TodoItem, TodoList } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state = signal<TodoList>({
    todoItems: [
      {
        id: 1,
        name: 'Create YT video',
        isCompleted: false,
      },
      {
        id: 2,
        name: 'Go to the gym',
        isCompleted: true,
      },
      {
        id: 3,
        name: 'Buy flowers',
        isCompleted: false,
      },
    ],
  });
  todoItems = computed(() => this.state().todoItems);

  saveTodo(todo: TodoItem) {
    let id = this.state().todoItems.at(-1)?.id;
    const newTodoItem = {
      id: id ? id + 1 : 1,
      name: todo.name,
      isCompleted: false,
    };

    this.state.update((state) => ({
      todoItems: [...state.todoItems, newTodoItem],
    }));
  }

  updateCompleted(data: any) {
    const updatedTodoList = this.state().todoItems.map((todo) => {
      if (todo.id === data.todoItemId) {
        todo.isCompleted = data.checked;
      }

      return todo;
    });

    this.state.update((state) => ({
      todoItems: updatedTodoList,
    }));
  }

  deleteTodo(todoItemId: number) {
    const newTodoList = this.state().todoItems.filter(
      (todo) => todo.id !== todoItemId
    );

    this.state.update((state) => ({
      todoItems: newTodoList,
    }));
  }
}
