import { AppDataSource } from '../..';
import { Task } from '../models/Task.entity';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { UpdateResult } from 'typeorm';

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

  public static async findById(id: string): Promise<Task | null> {
    let task!: Task | null;

    try {
      task = await AppDataSource.getRepository(Task).findOneBy({
        id,
      });
      task = instanceToPlain(task) as Task;
      return task;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async update(
    id: string,
    options: Record<string, never>,
  ): Promise<UpdateResult> {
    let task!: UpdateResult;

    try {
      task = await AppDataSource.getRepository(Task).update(
        id,
        plainToInstance(Task, { ...options }),
      );
      task = instanceToPlain(task) as UpdateResult;
      return task;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const taskService = new TaskService();
export { TaskService };
