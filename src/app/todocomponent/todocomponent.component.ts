import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todocomponent',
  standalone: true,  // ✅ Mark it as a standalone component
  imports: [CommonModule, FormsModule], // ✅ Import CommonModule & FormsModule
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.css']
})
export class TodocomponentComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ id: this.todos.length + 1, title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
