import {providersConfig} from '@app/config/constants';
import {ProviderConfig} from '@app/config/providerConfig';
import axios from 'axios';
import {WaveForecastProvider} from '../../waveforecast';
export class SurfLineProvider implements WaveForecastProvider {
  private config: ProviderConfig;
  constructor() {
    this.config = providersConfig.filter(e => e.provider === 'surfline')[0];
  }
  async getForecast(spot: string): Promise<unknown> {
    return axios.get(`${this.config.baseURL}${this.config.endpoints.wave}`, {
      params: {
        spotId: spot,
        days: 6,
        intervalHours: 1,
        maxHeights: true,
        sds: true,
      },
    });
  }
}
