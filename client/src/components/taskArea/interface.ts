import { Priority } from '../createTaskForm/enums/Priority';
import { Status } from '../createTaskForm/enums/Status';

export interface ICreateTask {
  title: string;
  description: string;
  date: string;
  status: string;
  priority: string;
}
export interface IUpdateTask {
  id: string;
  status: string;
  priority?: string;
}

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
