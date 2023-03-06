import { Request, Response } from 'express';
import { TaskController } from '../service/task.service';
import { validateTaskRequest } from './validator/task.validator';

export const index = async (req: Request, res: Response) => {
  const taskService = new TaskController();
  const tasks = await taskService.index();

  res.json(tasks).status(200);
};

export const store = async (req: Request, res: Response) => {
  const { body } = req;
  const validateRequestBody = validateTaskRequest(body);
  if (!validateRequestBody.valid) {
    return res.json({ errors: validateRequestBody.errors }).status(400);
  }
  try {
    const taskService = new TaskController();
    const tasks = await taskService.index();
    return res.json(tasks).status(200);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
