import express from 'express'
import config from './config'
import { staticMiddleware } from './middleware/static'
import { proxyMiddleware } from './middleware/proxy'
import { headersMiddleware } from './middleware/headers'

const app = express()

app.use('/api', proxyMiddleware)

app.use(staticMiddleware)

app.use(headersMiddleware)
const listen = () => {
  app.listen(config.port, () => {
    console.log(`Frontend listen on http://localhost:${config.port}`)
  })
}

export { listen }