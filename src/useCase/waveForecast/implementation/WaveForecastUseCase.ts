import { UseCase } from '@app/useCase/IUseCase';
import { WaveForecastService } from '@app/services/waveForecast/IWaveForecastService';
export class WaveForecastUseCase implements UseCase {
  constructor(private waveForecastService: WaveForecastService) {}
  async execute(params: { provider: string; spot: string }): Promise<unknown> {
    return this.waveForecastService.getWaveForecast(params);
  }
}
