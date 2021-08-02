import {STATUS_CODE} from '@app/controller/controller';
// eslint-disable-next-line node/no-extraneous-import
import {describe, test, expect, jest, beforeEach} from '@jest/globals';
import {ControllerBase} from '@app/controller/controller-base';
import {ControllerMock} from './mock/controller.mock';
describe('Controller test', () => {
  const controllerBase = new ControllerBase();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('if validation is called', async () => {
    const validateSpy = jest.spyOn(controllerBase, '_validate');

    await expect(controllerBase.execute({})).rejects.toThrow();

    expect(validateSpy).toBeCalled();
  });
  test('if execute is not called when validation fail', async () => {
    const validateSpy = jest.spyOn(controllerBase, '_validate');
    const executeSpy = jest.spyOn(controllerBase, '_execute');

    await expect(controllerBase.execute({})).rejects.toThrow();

    expect(validateSpy).toBeCalled();
    expect(executeSpy).not.toBeCalled();
  });
  test('if input validation is correct method execute is called', async () => {
    const validateSpy = jest
      .spyOn(controllerBase, '_validate')
      .mockReturnValue(
        ControllerMock.aController()
          .withOutErrorOnValidate()
          .build()
          ._validate()
      );
    const executeSpy = jest.spyOn(controllerBase, '_execute');

    await expect(controllerBase.execute({})).rejects.toThrow();

    expect(validateSpy).toBeCalled();
    expect(executeSpy).toBeCalled();
  });
  test('if input validation fail execute return bad request', async () => {
    const validateSpy = jest
      .spyOn(controllerBase, '_validate')
      .mockReturnValue(
        ControllerMock.aController().withErrorOnValidate().build()._validate()
      );
    const executeSpy = jest.spyOn(controllerBase, '_execute');

    await expect((await controllerBase.execute({})).statusCode).toEqual(
      STATUS_CODE.BAD_REQUEST
    );
    expect(validateSpy).toBeCalled();
    expect(executeSpy).not.toBeCalled();
  });
  test('if input validation and execute is correct return SUCCESS', async () => {
    const controllerMock = ControllerMock.aController()
      .withOutErrorOnValidate()
      .build();
    const validateSpy = jest
      .spyOn(controllerBase, '_validate')
      .mockReturnValue(controllerMock._validate());
    const executeSpy = jest
      .spyOn(controllerBase, '_execute')
      .mockReturnValue(controllerMock._execute());

    await expect((await controllerBase.execute({})).statusCode).toEqual(
      STATUS_CODE.SUCCESS
    );
    expect(validateSpy).toBeCalled();
    expect(executeSpy).toBeCalled();
  });
});
