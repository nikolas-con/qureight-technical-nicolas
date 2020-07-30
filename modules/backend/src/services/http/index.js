import express from 'express'
import config from '../../config'


const app = express()

const listen = () => {
  app.listen(config.port, () => {
    console.log(`The Backend listen ${config.port}`)
  })
}
export { listen, app }

