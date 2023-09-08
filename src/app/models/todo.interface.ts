export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoList {
  todoItems: TodoItem[];
}
