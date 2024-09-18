// tests/api/test.test.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/demoApi'; // Adjust the path if necessary

describe('/api/test API Endpoint', () => {
  it('should return 200 and API works message', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ message: 'API works!' });
  });
});
