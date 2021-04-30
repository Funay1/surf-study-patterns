import { WaveForecastController } from '@app/controller/waveForecast/implementation/WaveForecastController';
import { SurfLineProvider } from '@app/provider/waveForecast/implementations/surfLine/SurfLineProvider';
import { WaveForecastServiceClass } from '@app/services/waveForecast/implementations/WaveForecastService';
import { WaveForecastUseCase } from '@app/useCase/waveForecast/implementation/WaveForecastUseCase';
export class WaveForecastFactory {
  static createInstance(): WaveForecastController {
    const surfLineProvider = new SurfLineProvider();
    const waveForecastService = new WaveForecastServiceClass({
      surfLine: surfLineProvider,
    });
    const waveForecastUseCase = new WaveForecastUseCase(waveForecastService);
    const waveForecastController = new WaveForecastController(
      waveForecastUseCase
    );
    return waveForecastController;
  }
}
