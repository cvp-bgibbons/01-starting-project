import { Component,Input } from '@angular/core';
import { Task } from './Task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

    @Input({ required: true }) task!: Task;
  
}
