import config from '../config'

const headersMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${config.proxy}`)
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-Length, Authorization')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
}

export { headersMiddleware }