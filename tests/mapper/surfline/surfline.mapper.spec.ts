/* eslint-disable node/no-extraneous-import */
import {describe, test, jest, beforeEach} from '@jest/globals';
import {SurfLineMapperClass} from '@app/mapper/surfline/implementations/surfline.mapper';
import {SurfLineMapper} from '@app/mapper/surfline/surfline';
import {SurflineDataMock} from '../../shared/mocks/surfline-data.mock';
describe('Surfline Mappers', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockReturnValue();
    jest.clearAllMocks();
  });
  test('Check if empty wave data on input returns empty wave data ', async () => {
    const surfLineMapper: SurfLineMapper = new SurfLineMapperClass();
    const surfLineData = SurflineDataMock.aSurflineData()
      .withoutWavesInformation()
      .build();
    const obtainedDomainWave = surfLineMapper.surfLineWaveToDomain(
      surfLineData
    );
    expect(obtainedDomainWave.length).toEqual(0);
  });
  test('Check if returned swells structure is correct', async () => {
    const swellKeys = ['direction', 'height', 'period'];
    const surfLineMapper: SurfLineMapper = new SurfLineMapperClass();
    const surfLineData = SurflineDataMock.aSurflineData().build();

    const obtainedDomainWave = surfLineMapper.surfLineWaveToDomain(
      surfLineData
    );
    const obtainedKeys = Object.keys(obtainedDomainWave[0].swells[0]);
    const hasAllKeys = swellKeys.every(el => obtainedKeys.includes(el));
    expect(hasAllKeys).toBeTruthy();
  });
  test('Check if returned swells structure is correct', async () => {
    const heightKeys = ['min', 'max', 'unit'];
    const surfLineMapper: SurfLineMapper = new SurfLineMapperClass();
    const surfLineData = SurflineDataMock.aSurflineData().build();

    const obtainedDomainWave = surfLineMapper.surfLineWaveToDomain(
      surfLineData
    );
    const obtainedKeys = Object.keys(obtainedDomainWave[0].height);
    const hasAllKeys = heightKeys.every(el => obtainedKeys.includes(el));
    expect(hasAllKeys).toBeTruthy();
  });
});
