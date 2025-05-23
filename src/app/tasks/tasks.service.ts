import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      dueDate: taskData.date,
      summary: taskData.summary,
      userId,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
