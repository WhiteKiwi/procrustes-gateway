import { Request } from 'express'
import Router from 'express-promise-router'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { API } from '../config'

const router = Router()

const options = {
	target: 'API_BACKEND',
	router: (req: Request) => {
		return API.API_BACKEND
	},
}
  
const proxyMiddleware = createProxyMiddleware('/api', options)
router.use(proxyMiddleware)

export default router
