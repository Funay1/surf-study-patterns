import Domain from '@Domain';
import {surfline} from '@app/model/surfline';
import {SurfLineMapper} from '../surfline';
export class SurfLineMapperClass implements SurfLineMapper {
  surfLineWaveToDomain(surfLineData: surfline.SurflineData): Domain.wave[] {
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
