import { Router } from 'express';
import { index, store } from '../controllers/task';

const route: Router = Router();

route.get('/', index);
route.post('/', store);

export default route;
