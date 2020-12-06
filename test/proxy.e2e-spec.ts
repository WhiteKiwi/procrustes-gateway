import request from 'supertest'
import app from '../src/app'
import { SERVICES, HTTP_STATUS_CODE } from '../src/utils/constants'
import packageInfo from '../package.json'
const { API_BACKEND, WANDERER } = SERVICES

describe('Gateway (e2e)', () => {
	it('GET: / - should return version of package', async () => {
		const resp = await request(app).get('/')
		expect(resp.body.version).toBe(packageInfo.version)
	})

	it('/api - should return "API_BACKEND', async () => {
		const resp = await request(app).get('/api')
		expect(resp.text).toBe(API_BACKEND)
	})

	it('/api/users - should return "WANDERER', async () => {
		const resp = await request(app).get('/api/users')
		expect(resp.text).toBe(WANDERER)
	})

	it('/api/any - should return "API_BACKEND', async () => {
		const resp = await request(app).get('/api/any')
		expect(resp.text).toBe(API_BACKEND)
	})

	it('/non-existent-url - should return "404 Not Found" with 404 status code', async () => {
		const resp = await request(app).get('/non-existent-url')
		expect(resp.text).toBe('404 Not Found')
		expect(resp.status).toBe(HTTP_STATUS_CODE.NotFound)
	})
})
