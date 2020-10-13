import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ITask } from '../interfaces/itask';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TasksService{

    public taskList: ITask[];

    constructor(private http: HttpClient){}

    fetchTasks(): Observable<ITask[]>{
        return this.http.get<ITask[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .pipe(tap(tasks => this.taskList = tasks));
    }

    onToggle(id: number): void {
        const currentTask = this.getTaskById(id);
        if (currentTask){
            currentTask.isDone = !currentTask.isDone;
        }
    }

    removeTask(taskId: number): void{
        this.taskList = this.taskList.filter(task => task.id !== taskId);
    }

    getTaskById(id: number): ITask{
        return this.taskList.find(elem => elem.id === id);
    }

    addTask(newTask: ITask): void {
        this.taskList.push(newTask);
    }
}
