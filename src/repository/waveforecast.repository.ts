import Domain from '@Domain';
import {Wave} from '@prisma/client';
export interface WaveForecastRepository {
  save(waveforecastResult: Domain.wave): Promise<Wave>;
}
