import axios from 'axios';
import { WaveForecastProvider } from '../../IWaveForecast';
const URL = 'ABC';
export class SurfLineProvider implements WaveForecastProvider {
  async getForecast(spot: string): Promise<unknown> {
    await axios.get(URL);
    return;
  }
}
