import {surfline} from '@app/model/surfline';

export interface SurflineProvider {
  getForecast(spot: string): Promise<surfline.SurflineData>;
}
