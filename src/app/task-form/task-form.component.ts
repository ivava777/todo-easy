import { Component, OnInit } from '@angular/core';
import { ITask } from '../interfaces/itask';
import { TasksService } from '../shared/tasks.sevice';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  title: '';
  emptyTitleError = false;
  alreadyChekedTitle = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  validateTaskTitle(validateBeforeAdding: boolean = false): boolean{

    if (!this.alreadyChekedTitle && !validateBeforeAdding) {
      return true;
    }

    if (this.title.trim().length < 5){
      this.emptyTitleError = true;
    } else {
      this.emptyTitleError = false;
    }
  }

  addTask(){
    this.validateTaskTitle(true);
    if (this.emptyTitleError) {
      this.alreadyChekedTitle = true;
      return;
    }

    const newTask: ITask = {
      title: this.title,
      id: new Date().getMilliseconds(),
      isDone: false,
      dateAdded: new Date()
    }
    this.tasksService.addTask(newTask);
    this.title = '';
    this.alreadyChekedTitle = false;
  }
}
