import express, {Response, Request} from 'express';
import 'express-async-errors';
import {routes} from './handler/index';

import 'dotenv/config';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response) => {
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err}`,
  });
});

export {app};
