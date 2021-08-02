import Domain from '@Domain';
import {surfline} from '@app/model/surfline';
export interface SurfLineMapper {
  surfLineWaveToDomain(surfLineData: surfline.SurflineData): Domain.wave[];
}
