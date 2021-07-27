import {Router} from 'express';
import {WaveForecastFactory} from '../factory/waveforecast/implementations/waveforecast.factory';

const routes = Router();

routes.get('/search', async (request, response) => {
  const result = await WaveForecastFactory.createInstance().execute(
    request.query
  );
  return response.status(result.statusCode).send(result.body);
});

export {routes};
