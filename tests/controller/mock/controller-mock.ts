import {
  Controller,
  inputValidation,
  Response,
  STATUS_CODE,
} from '@app/controller/controller';

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
  async _execute(): Promise<Response> {
    return {
      body: this.body,
      statusCode: this.statusCode,
    };
  }
  _validate(): inputValidation {
    return {
      hasError: this.hasError,
      message: this.message,
    };
  }
  build() {
    return this;
  }
}
