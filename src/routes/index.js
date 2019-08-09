import { Router } from 'express'
import saveIncompleteUser from '../controllers/user'

const routes = new Router()

routes.get('/', (req, res) => {
  res.render('pages/index', req.query)
})

routes.post('/incomplete', saveIncompleteUser)

export default routes
