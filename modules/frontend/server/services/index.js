import express from 'express'
import config from './config'
import { staticMiddleware } from './middleware/static'
import { proxyMiddleware } from './middleware/proxy'
import { fallbackMiddleware } from './middleware/fallback'
import { headersMiddleware } from './middleware/headers'

const app = express()

app.use('/api', proxyMiddleware)

app.use(staticMiddleware)

app.use(headersMiddleware)

app.get('*', fallbackMiddleware)

const listen = () => {
  app.listen(config.port, () => {
    console.log(`Frontend listen on http://localhost:${config.port}`)
  })
}

export { listen }