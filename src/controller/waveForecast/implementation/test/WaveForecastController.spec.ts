import { STATUS_CODE } from '@app/controller/IController';
import { MissingProvider } from '@app/shared/errors/MissingProvider';
import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { WaveForecastController } from '../WaveForecastController';

describe('WaveForecastController test Input Params', () => {
  const mockUseCase = {
    execute: jest.fn(async (...args) => {}),
  };
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockReturnValue();
    jest.spyOn(console, 'log').mockReturnValue();
  });
  test('return badrequest if has not parameters', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    const response = await new WaveForecastController(mockUseCase).execute({});

    expect(response.statusCode).toEqual(STATUS_CODE.BAD_REQUEST);
    expect(useCaseSpy).not.toBeCalled();
  });
  test('return badrequest if has not provider', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    const response = await new WaveForecastController(mockUseCase).execute({
      spot: 'SPOT TEST',
    });

    expect(response.statusCode).toEqual(STATUS_CODE.BAD_REQUEST);
    expect(useCaseSpy).not.toBeCalled();
  });
  test('return badrequest if has not spot', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    const response = await new WaveForecastController(mockUseCase).execute({
      provider: 'PROVIDER TEST',
    });
    expect(response.statusCode).toEqual(STATUS_CODE.BAD_REQUEST);
    expect(useCaseSpy).not.toBeCalled();
  });
  test('call useCase if receive provider and spot', async () => {
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');
    await new WaveForecastController(mockUseCase).execute({
      provider: 'PROVIDER TEST',
      spot: 'SPOT TEST',
    });
    expect(useCaseSpy).toBeCalled();
  });
  test('Return internal server error if useCase throw exception', async () => {
    mockUseCase.execute = jest.fn(() => {
      throw new Error('');
    });
    const useCaseSpy = jest.spyOn(mockUseCase, 'execute');

    const response = await new WaveForecastController(mockUseCase).execute({
      provider: 'PROVIDER TEST',
      spot: 'SPOT TEST',
    });

    expect(useCaseSpy).toThrow();
    expect(response.statusCode).toEqual(500);
  });

  test('Return badRequest if doesnot exist provider', async () => {
    mockUseCase.execute = jest.fn(() => {
      throw new MissingProvider('');
    });
    const response = await new WaveForecastController(mockUseCase).execute({
      provider: '#INVALID PROVIDER',
      spot: 'SPOT TEST',
    });
    expect(response.statusCode).toEqual(400);
  });

  test('Validate spot', async () => {
    const response = new WaveForecastController(mockUseCase)._validate({});
    expect(response.hasError).toEqual(true);
  });
});
