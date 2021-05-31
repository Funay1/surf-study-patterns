// import { WaveForecastController } from '@app/controller/waveforecast/implementations/waveforecast-controller';
import {WaveforecastController} from '@app/controller/waveforecast/implementations/waveforecast-controller';
import {SurfLineProvider} from '@app/provider/waveforecast/implementations/surfline/surfline-provider';
import {WaveForecastServiceClass} from '@app/service/waveforecast/implementations/waveforecast-service';
import {WaveForecastUseCase} from '@app/usecase/waveforecast/implementations/waveforecast-usecase';

export class WaveForecastFactory {
  static createInstance(): WaveforecastController {
    const surfLineProvider = new SurfLineProvider();
    const waveForecastService = new WaveForecastServiceClass({
      surfLine: surfLineProvider,
    });
    const waveForecastUseCase = new WaveForecastUseCase(waveForecastService);
    const waveForecastController = new WaveforecastController(
      waveForecastUseCase
    );
    return waveForecastController;
  }
}
