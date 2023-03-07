import { Request, Response } from 'express';
import { TaskService, taskService } from '../service/task.service';
import {
  validateTaskRequest,
  validateUpdateTaskRequest,
} from './validator/task.validator';

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

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      body: { id },
    } = req;
    const data = {
      ...req.body,
    };

    const { id: dataId, ...rest } = data;

    const validateRequestBody = validateUpdateTaskRequest(data);
    if (!validateRequestBody.valid) {
      return res.json({ errors: validateRequestBody.errors }).status(400);
    }

    let task;
    try {
      task = await TaskService.findById(id);
      if (!task) {
        return res.json(`task with ${id} does not exist`).status(404);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }

    try {
      task = await TaskService.update(dataId, rest);
      return res.json(task);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const taskController = new TaskController();
