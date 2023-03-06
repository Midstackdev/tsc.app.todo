import { AppDataSource } from '../..';
import { Task } from '../models/Task.entity';
import { instanceToPlain } from 'class-transformer';

export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async index(): Promise<Task[]> {
    let tasks!: Task[];

    try {
      tasks = await this.taskRepository.find({
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
}
