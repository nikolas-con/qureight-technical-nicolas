import {createProxyMiddleware as proxy} from 'http-proxy-middleware'

import config from '../config'


const options = {
  target: config.proxy,
  changeOrigin: true,
}

const proxyMiddleware = proxy(options)

export { proxyMiddleware }
