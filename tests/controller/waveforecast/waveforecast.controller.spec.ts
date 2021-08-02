/* eslint-disable node/no-extraneous-import */
import {STATUS_CODE} from '@app/controller/controller';
import {MissingProvider} from '@app/shared/errors/MissingProvider';
import {describe, test, expect, jest, beforeEach} from '@jest/globals';
import {WaveforecastController} from '@app/controller/waveforecast/implementations/waveforecast.controller';

describe('WaveForecastController test Input Params', () => {
  const mockUseCase = {
    execute: jest.fn(async () => {}),
  };
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockReturnValue();
    jest.spyOn(console, 'log').mockReturnValue();
  });
  test('return badrequest if has not parameters', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    const response = await new WaveforecastController(mockUseCase).execute({});

    expect(response.statusCode).toEqual(STATUS_CODE.BAD_REQUEST);
    expect(useCaseSpy).not.toBeCalled();
  });
  test('return badrequest if has not provider', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    const response = await new WaveforecastController(mockUseCase).execute({
      spot: 'SPOT TEST',
    });

    expect(response.statusCode).toEqual(STATUS_CODE.BAD_REQUEST);
    expect(useCaseSpy).not.toBeCalled();
  });
  test('return badrequest if has not spot', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    const response = await new WaveforecastController(mockUseCase).execute({
      provider: 'PROVIDER TEST',
    });
    expect(response.statusCode).toEqual(STATUS_CODE.BAD_REQUEST);
    expect(useCaseSpy).not.toBeCalled();
  });
  test('call useCase if receive provider and spot', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    await new WaveforecastController(mockUseCase).execute({
      provider: 'PROVIDER TEST',
      spot: 'SPOT TEST',
    });
    expect(useCaseSpy).toBeCalled();
  });
  test('should expect throw exception when usecase throw exception', async () => {
    mockUseCase.execute = jest.fn(() => {
      throw new Error('');
    });
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');

    await expect(
      new WaveforecastController(mockUseCase).execute({
        provider: 'PROVIDER TEST',
        spot: 'SPOT TEST',
      })
    ).rejects.toThrow();
    expect(useCaseSpy).toThrow();
  });

  test('Return badRequest if doesnot exist provider', async () => {
    mockUseCase.execute = jest.fn(() => {
      throw new MissingProvider('');
    });
    const response = await new WaveforecastController(mockUseCase).execute({
      provider: '#INVALID PROVIDER',
      spot: 'SPOT TEST',
    });
    expect(response).toEqual({
      statusCode: STATUS_CODE.BAD_REQUEST,
      body: {
        message: 'Unexpected Provider',
      },
    });
  });

  test('should throw error when usecase throws unexpectedError', async () => {
    mockUseCase.execute = jest.fn(() => {
      throw new Error('unexpected error');
    });
    await expect(
      new WaveforecastController(mockUseCase).execute({
        provider: '#INVALID PROVIDER',
        spot: 'SPOT TEST',
      })
    ).rejects.toThrow();
  });

});
