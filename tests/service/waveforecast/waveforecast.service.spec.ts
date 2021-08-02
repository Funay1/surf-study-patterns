/* eslint-disable node/no-extraneous-import */
import {describe, test, jest, expect, beforeEach} from '@jest/globals';
import {WaveForecastServiceClass} from '@app/service/waveforecast/implementations/waveforecast.service';
import {WaveForecastProviderMock} from './mocks/waveforecast-gateway.mock';
import {MissingProvider} from '@app/shared/errors/MissingProvider';
describe('SurfLineService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should expect invalid provider throw exception', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast()
      .withInvalidProvider()
      .build();
    const surfLineService = new WaveForecastServiceClass(providerMock);
    await expect(
      surfLineService.getWaveForecast({
        provider: '#InvalidProvider',
        spot: '',
      })
    ).rejects.toThrow('');
  });
  test('should throw invalid provider expection and dont call provider', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast().build();
    const providerSpy = jest.spyOn(providerMock.surfline, 'getForecast');
    const surfLineService = new WaveForecastServiceClass(providerMock);
    await expect(
      surfLineService.getWaveForecast({
        provider: 'invalid-provider',
        spot: '',
      })
    ).rejects.toBeInstanceOf(MissingProvider);

    expect(providerSpy).not.toBeCalled();
  });
  test('Valid Provider called', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast().build();
    const surfLineService = new WaveForecastServiceClass(providerMock);
    const providerSpy = jest.spyOn(providerMock.surfline, 'getForecast');
    await surfLineService.getWaveForecast({
      provider: 'surfline',
      spot: '',
    });
    expect(providerSpy).toBeCalled();
  });

  test('Valid Provider called param', async () => {
    const providerMock = WaveForecastProviderMock.aWaveForecast().build();
    const surfLineService = new WaveForecastServiceClass(providerMock);
    const searchParams = {
      provider: 'surfline',
      spot: '#spot',
    };
    const providerSpy = jest.spyOn(providerMock.surfline, 'getForecast');
    const result = await surfLineService.getWaveForecast(searchParams);
    expect(providerSpy).toBeCalledWith(searchParams.spot);
    expect(result).not.toBeNull();
  });
});
