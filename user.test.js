const request = require('supertest');
const app = require('./index'); // đường dẫn đến file chính của bạn

describe('User Service API', () => {
  it('should return user data when ID exists', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'John Doe');
  });

  it('should return 404 when user not found', async () => {
    const res = await request(app).get('/users/999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'User not found');
  });
});
