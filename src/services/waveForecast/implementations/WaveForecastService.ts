import { WaveForecastProvider } from '@app/provider/waveForecast/IWaveForecast';
import { MissingProvider } from '@app/shared/errors/MissingProvider';
import { WaveForecastService } from '../IWaveForecastService';

export class WaveForecastServiceClass implements WaveForecastService {
  constructor(
    private contextProviders: { [key: string]: WaveForecastProvider }
  ) {}
  private getProvider(provider: string) {
    return this.contextProviders[provider];
  }
  async getWaveForecast(search: {
    provider: string;
    spot: string;
  }): Promise<unknown> {
    const provider = this.getProvider(search.provider);
    if (!provider) {
      throw new MissingProvider(search.provider);
    }
    return provider.getForecast(search.spot);
  }
}
