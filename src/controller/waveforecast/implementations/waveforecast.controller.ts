import {ControllerBase} from '@app/controller/controller-base';
import {
  inputValidation,
  STATUS_CODE,
  Response,
} from '@app/controller/controller';
import {MissingProvider} from '@app/shared/errors/MissingProvider';
import {UseCase} from '@app/usecase/usecase';

export class WaveforecastController extends ControllerBase {
  constructor(private waveForecastUseCase: UseCase) {
    super();
  }
  _validate(params: {provider?: string; spot?: string}): inputValidation {
    if (!params.provider) {
      return {
        hasError: true,
        message: 'Missing Provider',
      };
    }
    if (!params.spot) {
      return {
        hasError: true,
        message: 'Missing spot',
      };
    }
    return {
      hasError: false,
    };
  }
  async _execute(params: {provider: string; spot: string}): Promise<Response> {
    try {
      const {provider, spot} = params;
      const body = await this.waveForecastUseCase.execute({
        provider,
        spot,
      });
      return {
        statusCode: STATUS_CODE.SUCCESS,
        body,
      };
    } catch (e) {
      if (e instanceof MissingProvider) {
        return {
          statusCode: STATUS_CODE.BAD_REQUEST,
          body: {
            message: 'Unexpected Provider',
          },
        };
      } else {
        throw e;
      }
    }
  }
}
