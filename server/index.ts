import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import routes from './src/routes';
import { Task } from './src/models/Task.entity';

dotenv.config();
const port = process.env.PORT;
// console.log('---ENV---', process.env);

const app: Express = express();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST,
  port: Number(process.env.MYSQL_DB_PORT),
  username: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_DATABASE,
  entities: [Task],
  synchronize: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('Data Source has been initialized');
  })
  .catch((err) => {
    console.log({
      message: 'Erorr during Data Source initialization',
      err,
    });
  });
