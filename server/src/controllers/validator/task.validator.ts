import { Priority } from '../../enums/Priority';
import { Status } from '../../enums/Status';
import { validateData } from '../../utill';

const CREATE_TASK_VALIDATION_RULES = {
  title: 'required|string',
  date: 'required|date',
  description: 'required|string',
  priority: `required|string|in:${Object.values(Priority).join(',')}`,
  status: `required|string|in:${Object.values(Status).join(',')}`,
};

const UPDATE_TASK_VALIDATION_RULES = {
  id: 'required|string',
  status: `required|string|in:${Object.values(Status).join(',')}`,
};

export const validateTaskRequest = (data: any) =>
  validateData(data, CREATE_TASK_VALIDATION_RULES);

export const validateUpdateTaskRequest = (data: any) =>
  validateData(data, UPDATE_TASK_VALIDATION_RULES);
