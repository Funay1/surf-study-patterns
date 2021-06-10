import Domain from '@Domain';
import SurfLine from '@Surfline';
export interface SurfLineMapper {
  surfLineWaveToDomain(surfLineData: SurfLine.data): Domain.wave[];
}
