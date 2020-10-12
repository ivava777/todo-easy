import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TasksService } from '../shared/tasks.sevice';
import { TasksFilterPipe} from '../shared/tasks-filter.pipe';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public loading = true;
  private searchString: string;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.fetchTasks()
      .pipe(delay(500))
      .subscribe(() => this.loading = false);
  }

  onChange(taskId: number) {
    this.tasksService.onToggle(taskId);
  }

  removeTask(taskId:number) {
    this.tasksService.removeTask(taskId);
  }
}
