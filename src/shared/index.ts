import {Router, Request, Response} from 'express';
import {WaveForecastFactory} from '../factory/waveforecast/implementations/waveforecast.factory';

const routes = Router();

routes.get('/search', async (request: Request, response: Response) => {
  const result = await WaveForecastFactory.createInstance().execute(
    request.query
  );
  return response.status(result.statusCode).send(result.body);
});

export {routes};
