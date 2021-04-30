import { WaveForecastProvider } from '@app/provider/waveForecast/IWaveForecast';

export interface WaveForecastService {
  getWaveForecast(search: { provider: string; spot: string }): Promise<unknown>;
}
