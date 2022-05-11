import { Router } from 'express'
import { createUser, loginUser } from '../controllers/authController'

const router = Router()

router.route('/auth/register').post(createUser)
router.route('/auth/login').post(loginUser)

export default router
