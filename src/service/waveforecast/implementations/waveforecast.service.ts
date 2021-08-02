import {SurflineProvider} from '@app/provider/surfline/surfline.provider';
import {MissingProvider} from '@app/shared/errors/MissingProvider';
import {WaveForecastService} from '../waveforecast.service';

type providers = {
  surfline: SurflineProvider;
};

export class WaveForecastServiceClass implements WaveForecastService {
  constructor(private contextProviders: providers) {}
  async getWaveForecast(search: {
    provider: string;
    spot: string;
  }): Promise<unknown> {
    const provider = search.provider.toLowerCase();
    switch (provider) {
      case 'surfline': {
        return this.contextProviders.surfline.getForecast(search.spot);
      }
      default: {
        throw new MissingProvider(provider);
      }
    }
  }
}
