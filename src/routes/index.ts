import Router from 'express-promise-router'
import wanderer from './wanderer'
import apiBackend from './api-backend'

const router = Router()

// /api/users
router.use('/users', wanderer)
// 위에서 routing 되지 않은 context들은 모두 api backend로 보냄
router.use(apiBackend)

export default router
