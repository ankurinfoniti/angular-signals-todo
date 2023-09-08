export interface TodoItem {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TodoList {
  todoItems: TodoItem[];
}
