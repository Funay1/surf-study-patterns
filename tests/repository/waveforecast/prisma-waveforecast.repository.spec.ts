/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
/* eslint-disable node/no-extraneous-import */
import {PrismaWaveforecastRepository} from '@app/repository/waveforecast/implementations/prisma-waveforecast.repository';
import {describe, test, expect} from '@jest/globals';
describe('waveforecast repository test', () => {
  test('should expect create user', async () => {
    const waveForecastRepository = new PrismaWaveforecastRepository();
    const result = await waveForecastRepository.save({
      height: {
        max: 1,
        min: 0,
        unit: 'abc',
      },
      swells: [],
    });
    console.log(typeof result);
    expect(typeof result).not.toBeNull();
  });
});
