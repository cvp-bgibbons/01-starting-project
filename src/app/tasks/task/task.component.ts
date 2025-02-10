import { DatePipe } from '@angular/common';
import { Component,  Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { task } from './Task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})



export class TaskComponent {

  constructor(private taskService: TasksService){}


  @Input({ required: true }) task!: task;
  //@Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
    //this.complete.emit(this.task.id);
  }

}
