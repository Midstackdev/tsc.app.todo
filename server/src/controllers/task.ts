import { Request, Response } from 'express';
import { taskService } from '../service/task.service';
import { validateTaskRequest } from './validator/task.validator';

class TaskController {
  public async index(req: Request, res: Response): Promise<Response> {
    const tasks = await taskService.getAll();

    return res.json(tasks).status(200);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const validateRequestBody = validateTaskRequest(body);
    if (!validateRequestBody.valid) {
      return res.json({ errors: validateRequestBody.errors }).status(400);
    }
    try {
      const task = await taskService.create(body);
      return res.json(task).status(200);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const taskController = new TaskController();
