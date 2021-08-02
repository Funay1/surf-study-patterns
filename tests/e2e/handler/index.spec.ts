/* eslint-disable node/no-unpublished-import */
/* eslint-disable node/no-extraneous-import */
import {describe, test, expect} from '@jest/globals';
import {app} from '@app/app';
import request from 'supertest';
describe('e2e search tests', () => {
  test('call invalid endpoint returns 404', async () => {
    const response = await request(app).get('/invalid-url');
    expect(response.status).toBe(404);
  });
  test('call invalid method expect returns 404', async () => {
    const response = await request(app).post('/search');
    expect(response.status).toBe(404);
  });
  test('call api without params', async () => {
    const response = await request(app).get('/search').query({});
    expect(response.status).toBe(400);
  });
  test('call api without spot', async () => {
    const response = await request(app).get('/search').query({
      provider: 'surfline',
    });
    expect(response.status).toBe(400);
  });
  test('call api without provider', async () => {
    const response = await request(app).get('/search').query({
      spot: '5842041f4e65fad6a7708e50',
    });
    expect(response.status).toBe(400);
  });
  test('should expect 500 on correct call with invalid spot', async () => {
    const response = await request(app).get('/search').query({
      provider: 'surfline',
      spot: '#invalid_spot',
    });
    expect(response.status).toBe(500);
  });
  test('should expect 200 on correct call with provider and spot', async () => {
    const response = await request(app).get('/search').query({
      provider: 'surfline',
      spot: '5842041f4e65fad6a7708e50',
    });
    expect(response.status).toBe(200);
  });
  test('should expect correct params to surfline provider', async () => {
    const response = await request(app).get('/search').query({
      provider: 'surfline',
      spot: '5842041f4e65fad6a7708e50',
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('associated');
  });
});
