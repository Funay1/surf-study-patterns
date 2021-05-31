import {UseCase} from '@app/usecase/usecase';
import {WaveForecastService} from '@app/service/waveforecast/waveforecast-service';
export class WaveForecastUseCase implements UseCase {
  constructor(private waveForecastService: WaveForecastService) {}
  async execute(params: {provider: string; spot: string}): Promise<unknown> {
    return this.waveForecastService.getWaveForecast(params);
  }
}
