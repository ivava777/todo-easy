import { Component, OnInit } from '@angular/core';

import { ITask } from '../interfaces/itask';
import { TasksService } from '../shared/tasks.sevice';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  title = '';
  isEmptyTitleError = false;
  isAlreadyChekedTitle = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  validateTaskTitle(validateBeforeAdding: boolean = false): boolean{

    if (!this.isAlreadyChekedTitle && !validateBeforeAdding) {
      return true;
    }

    if (this.title.trim().length < 5){
      this.isEmptyTitleError = true;
    } else {
      this.isEmptyTitleError = false;
    }
  }

  addTask(): void{
    this.validateTaskTitle(true);
    if (this.isEmptyTitleError) {
      this.isAlreadyChekedTitle = true;
      return;
    }

    const newTask: ITask = {
      title: this.title,
      id: new Date().getMilliseconds(),
      isDone: false,
      dateAdded: new Date()
    };
    this.tasksService.addTask(newTask);
    this.title = '';
    this.isAlreadyChekedTitle = false;
  }
}
