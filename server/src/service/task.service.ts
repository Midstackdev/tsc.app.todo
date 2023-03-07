import { AppDataSource } from '../..';
import { Task } from '../models/Task.entity';
import { instanceToPlain } from 'class-transformer';

class TaskService {
  public async getAll(): Promise<Task[]> {
    let tasks!: Task[];

    try {
      tasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });
      tasks = instanceToPlain(tasks) as Task[];
      return tasks;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async create(body: Record<string, never>): Promise<Task> {
    let task!: Task;
    // const newTask = new Task();
    const newTask = { ...body };

    try {
      task = await AppDataSource.getRepository(Task).save(newTask);
      task = instanceToPlain(task) as Task;
      return task;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const taskService = new TaskService();
