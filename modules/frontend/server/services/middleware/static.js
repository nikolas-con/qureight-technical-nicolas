import Bundler from 'parcel-bundler'
import opn from 'open'
import config from '../config'
import path from 'path'
import express from 'express'
const bundler = new Bundler('public/index.html', {})

let staticMiddleware
if (config.env === 'development') {
  let hasOpen = false
  bundler.on('bundled', () => {
    if (!hasOpen) {
      opn(`http://localhost:${config.port}`)
      hasOpen = true
    }
  })  
  staticMiddleware = bundler.middleware()
} else if (config.env === 'production') {
  const assetsPath = path.join(__dirname, '../../web')
  staticMiddleware = express.static(assetsPath)
} else {
  staticMiddleware = (_1, _2, next) => next()
}

export { staticMiddleware }
