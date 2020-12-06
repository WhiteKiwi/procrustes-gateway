import Router from 'express-promise-router'
import wanderer from './wanderer'
import apiBackend from './api-backend'
import { ENVIRONMENT as ENV } from '../config'
import { ENVIRONMENT, SERVICES } from '../utils/constants'
const { API_BACKEND, WANDERER } = SERVICES
import mockedProxyMiddleware from './mocked-proxy-middleware'

const router = Router()

if (ENV === ENVIRONMENT.TEST) {
	// /api/users
	router.use('/users', mockedProxyMiddleware('/api/users', WANDERER))
	// 위에서 routing 되지 않은 context들은 모두 api backend로 보냄
	router.use(mockedProxyMiddleware('/api', API_BACKEND))
} else {
	// /api/users
	router.use('/users', wanderer)
	// 위에서 routing 되지 않은 context들은 모두 api backend로 보냄
	router.use(apiBackend)
}

export default router
