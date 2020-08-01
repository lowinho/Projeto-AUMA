import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express from 'express';
const { errors } = require('celebrate');
import Youch from 'youch';
import * as Sentry from '@sentry/node';
// eslint-disable-next-line no-unused-vars
import 'express-async-errors';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import database from './database/connection';
import sentryConfig from './config/sentry';



class App {
    constructor() {
        this.app = express();

        Sentry.init(sentryConfig);

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.app.use(Sentry.Handlers.requestHandler());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/users', userRoutes);
        this.app.use('/token', tokenRoutes)
        this.app.use(errors());
        this.app.use(Sentry.Handlers.errorHandler());
    }

    exceptionHandler() {
      this.app.use(async (err, req, res, next) => {
        if (process.env.NODE_ENV === 'development') {
          const errors = await new Youch(err, req).toJSON();

          res.status(500).json(errors);
        }

        return res.status(500).json({ error: 'Internal error client' });
      });
    }
}

export default new App().app;
