import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoItem } from '../models/todo.interface';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem | undefined;
  @Output() delete = new EventEmitter<number>();
  @Output() isCompletedChanged = new EventEmitter<any>();

  faTimes = faTimes;

  onCompletedChange(event: Event) {
    const data = {
      checked: (event.target as HTMLInputElement).checked,
      todoItemId: this.todoItem?.id,
    };

    this.isCompletedChanged.emit(data);
  }

  onDelete() {
    this.delete.emit(this.todoItem?.id);
  }
}
