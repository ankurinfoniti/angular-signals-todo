import { Injectable, computed, signal } from '@angular/core';

import { TodoList } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state = signal<TodoList>({ todoItems: [] });
  todoItems = computed(() => this.state().todoItems);

  fetchTodoItems() {
    this.state.update((state) => ({
      todoItems: [
        {
          id: '1',
          name: 'Create YT video',
          isCompleted: false,
        },
        {
          id: '2',
          name: 'Go to the gym',
          isCompleted: true,
        },
        {
          id: '3',
          name: 'Buy flowers',
          isCompleted: false,
        },
      ],
    }));
  }

  deleteTodo(todoItemId: string) {
    const newTodoList = this.state().todoItems.filter(
      (todo) => todo.id !== todoItemId
    );

    this.state.update((state) => ({
      todoItems: newTodoList,
    }));
  }
}
