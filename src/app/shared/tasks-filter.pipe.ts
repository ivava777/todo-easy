import { Pipe, PipeTransform } from '@angular/core';

import { ITask } from '../interfaces/itask';

@Pipe({
    name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform{
    transform(tasks: ITask[], search = ''): ITask[]{
        if (!search.trim()) {
            return tasks;
        } else {
            return tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
        }
    }

}
