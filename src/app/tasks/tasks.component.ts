import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.model';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService){
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
