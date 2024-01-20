import { config } from 'dotenv';

config();

import './database';

import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api', routes);
  }
}

export default new App().app;
