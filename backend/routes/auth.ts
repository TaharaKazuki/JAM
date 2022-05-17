import { Router } from 'express'
import { register, loginUser } from '../controllers/authController'

const router = Router()

router.route('/auth/register').post(register)
router.route('/auth/login').post(loginUser)

export default router
