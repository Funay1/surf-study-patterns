import {providersConfig} from '@app/config/constants';
import {ProviderConfig} from '@app/config/providerConfig';
import {surfline} from '@app/model/surfline';
import axios from 'axios';
import {SurflineProvider} from '../../surfline.provider';
export class SurfLineProviderClass implements SurflineProvider {
  private config: ProviderConfig;
  constructor() {
    this.config = providersConfig.filter(e => e.provider === 'surfline')[0];
  }
  async getForecast(spot: string): Promise<surfline.SurflineData> {
    return (
      await axios.get(`${this.config.baseURL}${this.config.endpoints.wave}`, {
        params: {
          spotId: spot,
          days: 6,
          intervalHours: 1,
          maxHeights: true,
          sds: true,
        },
      })
    ).data;
  }
}
