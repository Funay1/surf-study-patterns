import {
  Controller,
  inputValidation,
  Response,
  STATUS_CODE,
} from './IController';

export class ControllerBase implements Controller {
  _execute(params: unknown): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  async execute(params: unknown): Promise<Response> {
    const validation = this._validate(params);
    if (validation.hasError) {
      return {
        statusCode: STATUS_CODE.BAD_REQUEST,
        body: { message: validation.message },
      };
    }
    return this._execute(params);
  }
  _validate(params: unknown): inputValidation {
    throw new Error('Method not implemented.');
  }
}
