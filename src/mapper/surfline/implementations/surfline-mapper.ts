import Domain from '@Domain';
import SurfLine from '@Surfline';
import {SurfLineMapper} from '../surfline';
export class SurfLineMapperClass implements SurfLineMapper {
  surfLineWaveToDomain(surfLineData: SurfLine.data): Domain.wave[] {
    return surfLineData.data.wave.map(
      (wave): Domain.wave => {
        return {
          height: {
            max: wave.surf.max,
            min: wave.surf.min,
            unit: surfLineData.associated.units.waveHeight,
          },
          swells: wave.swells.map(swell => {
            return {
              direction: swell.direction,
              height: swell.height,
              period: swell.period,
            };
          }),
        };
      }
    );
  }
}
