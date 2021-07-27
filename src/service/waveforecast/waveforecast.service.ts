export interface WaveForecastService {
  getWaveForecast(search: {provider: string; spot: string}): Promise<unknown>;
}
