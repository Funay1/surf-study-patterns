import express, {Response, Request, NextFunction} from 'express';
import 'express-async-errors';
import {routes} from './shared/index';

import 'dotenv/config';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

export {app};
