import { dummyTasks } from '../dummy-tasks';

export type Task = (typeof dummyTasks)[0];

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
