import Domain from '@Domain';
import {WaveForecastRepository} from '@app/repository/waveforecast.repository';
import {prisma} from '@app/database/prisma.client';
import {Wave} from '@prisma/client';
export class PrismaWaveforecastRepository implements WaveForecastRepository {
  async save(waveforecastResult: Domain.wave): Promise<Wave> {
    return prisma.wave.create({
      data: {
        heightMax: waveforecastResult.height.max.toString(),
        heightMin: waveforecastResult.height.min.toString(),
        unit: waveforecastResult.height.unit,
      },
    });
  }
}
