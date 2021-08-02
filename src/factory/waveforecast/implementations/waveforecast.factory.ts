// import { WaveForecastController } from '@app/controller/waveforecast/implementations/waveforecast-controller';
import {WaveforecastController} from '@app/controller/waveforecast/implementations/waveforecast.controller';
import {SurfLineProviderClass} from '@app/provider/surfline/implementations/surfline/surfline.provider';
import {WaveForecastServiceClass} from '@app/service/waveforecast/implementations/waveforecast.service';
import {WaveForecastUseCase} from '@app/usecase/waveforecast/implementations/waveforecast.usecase';

export class WaveForecastFactory {
  static createInstance(): WaveforecastController {
    const surfLineProvider = new SurfLineProviderClass();
    const waveForecastService = new WaveForecastServiceClass({
      surfline: surfLineProvider,
    });
    const waveForecastUseCase = new WaveForecastUseCase(waveForecastService);
    const waveForecastController = new WaveforecastController(
      waveForecastUseCase
    );
    return waveForecastController;
  }
}
