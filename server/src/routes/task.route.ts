import { Router } from 'express';
import { taskController } from '../controllers/task';

const route: Router = Router();

route.get('/', taskController.index);
route.post('/', taskController.store);
route.put('/', taskController.update);

export default route;
