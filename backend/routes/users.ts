import { Router } from 'express'
import { getUser, updateUser, deleteUser } from '../controllers/usersController'

const router = Router()

router.route('/users/:id').get(getUser).put(updateUser).delete(deleteUser)

export default router
