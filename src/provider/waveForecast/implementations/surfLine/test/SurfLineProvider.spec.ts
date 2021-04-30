import { SurfLineProvider } from '../SurfLineProvider';
import { describe, test, jest, expect, afterAll } from '@jest/globals';
import axios from 'axios';
describe('SurfLineProvider', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  const surfLineProvider = new SurfLineProvider();
  test('SurfLineProvider call axios GET', async () => {
    const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue('');
    await surfLineProvider.getForecast('');
    expect(axiosSpy).toHaveBeenCalled();
  });
});
