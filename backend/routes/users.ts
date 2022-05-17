import { Router } from 'express'
import { updateUser } from '../controllers/usersController'

const router = Router()

router.route('/users/:id').put(updateUser)

export default router
