export interface Controller {
  _execute(params: unknown): Promise<Response>;
  _validate(params: unknown): inputValidation;
}
export interface Response {
  statusCode: STATUS_CODE;
  body: unknown;
}

export type inputValidation = {
  hasError: boolean;
  message?: string;
};

export enum STATUS_CODE {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
}
