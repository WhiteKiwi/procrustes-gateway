import { Request } from 'express'
import Router from 'express-promise-router'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { API } from '../config'

const router = Router()

const options = {
	target: 'WANDERER',
	router: (req: Request) => {
		return API.WANDERER
	},
}
  
const proxyMiddleware = createProxyMiddleware('/api/users', options)
router.use(proxyMiddleware)

export default router
