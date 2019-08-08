import express from 'express'
import logger from './utils/logger'
import config from './utils/config'
import store from './store'

const app = express()
const { port } = config


app.use(logger.request)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index', req.query)
})

app.post('/falloff', async (req, res) => {
  store(req.body)
  res.json('Dope')
})

app.listen(port, () => {
  logger.info(`Running on http://localhost:${port}/`)
})
