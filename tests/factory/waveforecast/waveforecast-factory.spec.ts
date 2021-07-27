/* eslint-disable node/no-extraneous-import */
import {describe, test, jest, expect, beforeEach} from '@jest/globals';
import {WaveForecastFactory} from '@app/factory/waveforecast/implementations/waveforecast.factory';
import axios from 'axios';
describe('WaveForecast', () => {
  test('Check if factory is calling provider methods', async () => {
    const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue('');
    const response = await (await WaveForecastFactory.createInstance()).execute(
      {
        provider: 'surfline',
        spot: 'ule',
      }
    );

    expect(axiosSpy).toBeCalled();
    expect(response.statusCode).toEqual(200);
  });
  beforeEach(() => {
    jest.spyOn(console, 'error').mockReturnValue();
    jest.clearAllMocks();
  });
  test('Check if factory is calling ', async () => {
    const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue('');
    const response = await (await WaveForecastFactory.createInstance()).execute(
      {
        provider: '#invalid provider',
        spot: 'ule',
      }
    );
    expect(response.statusCode).toEqual(400);
    expect(axiosSpy).not.toBeCalled();
  });
  test('Check if factory is return 400 when is missing provider', async () => {
    const response = await (await WaveForecastFactory.createInstance()).execute(
      {}
    );
    expect(response.statusCode).toEqual(400);
  });
  test('Check if factory is return 400 when is missing spot', async () => {
    const response = await (await WaveForecastFactory.createInstance()).execute(
      {
        provider: '',
      }
    );
    expect(response.statusCode).toEqual(400);
  });
  test.todo('Test when controller return unexpect error');
});
