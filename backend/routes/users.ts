import { Router } from 'express'
import { updateUser, deleteUser } from '../controllers/usersController'

const router = Router()

router.route('/users/:id').put(updateUser).delete(deleteUser)

export default router
