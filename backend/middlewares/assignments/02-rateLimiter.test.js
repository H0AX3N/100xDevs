const request = require('supertest');
const app = require('./02-rateLimiter');

describe('Rate Limiter Middleware', () => {
    test('should allow up to 5 requests for the same user', async () => {
        for (let i = 1; i <= 5; i++) {
            const res = await request(app)
                .get('/user')
                .set('user-id', '123');

            expect(res.statusCode).toBe(200);
        }
    });

    test('should block 6th request with 429', async () => {
        const res = await request(app)
            .get('/user')
            .set('user-id', '123');

        expect(res.statusCode).toBe(429);
        expect(res.text).toMatch(/exceeded/i);
    });

    test('should reset count after 1 second', async () => {
        // wait 1.1 seconds to allow reset
        await new Promise(resolve => setTimeout(resolve, 1100));

        const res = await request(app)
            .get('/user')
            .set('user-id', '123');

        expect(res.statusCode).toBe(200);
    });
});
