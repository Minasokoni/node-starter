import { Router } from 'express'
import { saveIncompleteUser, saveUser } from '../controllers/user'

const routes = new Router()

routes.get('/', saveUser)
routes.post('/incomplete', saveIncompleteUser)

export default routes
