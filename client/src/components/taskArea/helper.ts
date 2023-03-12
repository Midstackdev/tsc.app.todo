import { TaskCounterStatusType } from '../taskCounter/interfaces/ITaskCounter';
import { ITaskApi } from './interface';

export const taskCounter = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }

  const totalTasks = tasks.filter((task) => task.status === status);
  return totalTasks.length;
};
