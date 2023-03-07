import { Router } from 'express';
import { taskController } from '../controllers/task';

const route: Router = Router();

route.get('/', taskController.index);
route.post('/', taskController.store);

export default route;
