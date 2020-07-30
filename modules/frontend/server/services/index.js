import express from 'express'
import config from './config'
import { staticMiddleware } from './middleware/static'

const app = express()


app.use(staticMiddleware)

const listen = () => {
  app.listen(config.port, () => {
    console.log(`Frontend listen on http://localhost:${config.port}`)
  })
}

export { listen }