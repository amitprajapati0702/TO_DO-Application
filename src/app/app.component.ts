import { Component } from '@angular/core';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark it as a standalone component
  imports: [TodocomponentComponent],  // ✅ Import the ToDoComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
