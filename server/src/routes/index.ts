import { Router } from 'express';
import tasks from './task.route';

const router: Router = Router();

router.use('/tasks', tasks);

export default router;
