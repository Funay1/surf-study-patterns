/* eslint-disable node/no-extraneous-import */
import {expect, test, describe, jest} from '@jest/globals';
import {WaveForecastUseCase} from '@app/usecase/waveforecast/implementations/waveforecast.usecase';
describe('WaveForecastUseCase', () => {
  const waveForecastServiceMock = {
    getWaveForecast: jest.fn(async () => {}),
  };
  test('if is calling getWaveForecast method', async () => {
    const waveForecastServiceSpy = jest.spyOn(
      waveForecastServiceMock,
      'getWaveForecast'
    );
    new WaveForecastUseCase(waveForecastServiceMock).execute({
      provider: '',
      spot: '',
    });
    expect(waveForecastServiceSpy).toBeCalled();
  });
});
