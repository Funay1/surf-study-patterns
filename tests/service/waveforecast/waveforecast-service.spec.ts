/* eslint-disable node/no-extraneous-import */
import {describe, test, jest, expect, beforeEach} from '@jest/globals';
import {WaveForecastServiceClass} from '@app/service/waveforecast/implementations/waveforecast.service';
import {WaveForecastProviderMock} from './mocks/waveforecast-gateway-mock';
describe('SurfLineService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Invalid Provider', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast()
      .withInvalidProvider()
      .build();
    const surfLineService = new WaveForecastServiceClass(providerMock);
    await expect(
      surfLineService.getWaveForecast({
        provider: '#InvalidProvider',
        spot: '',
      })
    ).rejects.toThrow();
  });
  test('Valid Provider called', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast().build();
    const surfLineService = new WaveForecastServiceClass(providerMock);
    const providerSpy = jest.spyOn(providerMock.surfLine, 'getForecast');
    await surfLineService.getWaveForecast({
      provider: 'surfLine',
      spot: '',
    });
    expect(providerSpy).toBeCalled();
  });

  test('Valid Provider called param', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast().build();
    const surfLineService = new WaveForecastServiceClass(providerMock);
    const searchParams = {
      provider: 'surfLine',
      spot: '#spot',
    };
    const providerSpy = jest.spyOn(providerMock.surfLine, 'getForecast');
    await surfLineService.getWaveForecast(searchParams);
    expect(providerSpy).toBeCalledWith(searchParams.spot);
  });
});
