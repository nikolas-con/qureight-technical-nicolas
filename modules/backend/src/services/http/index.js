import express from 'express'
import config from '../../config'
import { errorMiddleware } from './middleware/error'


app.use(errorMiddleware)

const listen = () => {
  app.listen(config.port, () => {
    console.log(`The Backend listen ${config.port}`)
  })
}
export { listen, app }

