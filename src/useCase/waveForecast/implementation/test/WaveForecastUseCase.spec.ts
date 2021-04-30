import { expect, test, describe, jest } from '@jest/globals';
import { WaveForecastUseCase } from '../WaveForecastUseCase';
describe('WaveForecastUseCase', () => {
  const waveForecastServiceMock = {
    getWaveForecast: jest.fn(async (param) => {}),
  };
  test('if is calling getWaveForecast method', async () => {
    const waveForecastServiceSpy = jest.spyOn(
      waveForecastServiceMock,
      'getWaveForecast'
    );
    const waveForecastUseCase = new WaveForecastUseCase(
      waveForecastServiceMock
    ).execute({
      provider: '',
      spot: '',
    });
    expect(waveForecastServiceSpy).toBeCalled();
  });
});
