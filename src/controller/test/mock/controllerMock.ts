import {
  Controller,
  inputValidation,
  Response,
  STATUS_CODE,
} from '@app/controller/IController';

export class ControllerMock implements Controller {
  private body: {
    [key: string]: unknown;
  };
  private statusCode;
  private hasError;
  private message?: string;
  constructor() {
    this.body = {};
    this.statusCode = STATUS_CODE.SUCCESS;
    this.hasError = false;
  }
  static aController() {
    return new ControllerMock();
  }
  withErrorOnValidate() {
    this.hasError = true;
    this.message = 'fake message of error';
    return this;
  }
  withOutErrorOnValidate() {
    this.hasError = false;
    return this;
  }
  async _execute(params: unknown): Promise<Response> {
    return {
      body: this.body,
      statusCode: this.statusCode,
    };
  }
  _validate(params: unknown): inputValidation {
    return {
      hasError: this.hasError,
      message: this.message,
    };
  }
  build() {
    return this;
  }
}
