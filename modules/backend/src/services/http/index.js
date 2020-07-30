import express from 'express'
import config from '../../config'
import routes from '../../routes'
import { errorMiddleware } from './middleware/error'

const app = express()

app.use(express.json())

app.use('/api', routes)

app.use(errorMiddleware)


const listen = () => {
  app.listen(config.port, () => {
    console.log(`The Backend listen ${config.port}`)
  })
}
export { listen }

