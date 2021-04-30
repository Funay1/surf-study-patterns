export interface WaveForecastProvider {
  getForecast(spot: string): Promise<unknown>;
}
