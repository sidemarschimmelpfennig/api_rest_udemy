import { config } from 'dotenv';

config();

import './src/database';

import express from 'express';
import routes from './src/routes';

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
    this.app.use('/', routes);
  }
}

export default new App().app;
