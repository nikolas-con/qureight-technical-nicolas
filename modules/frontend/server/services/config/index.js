const config = {
  development: {
    port: process.env.PORT || 8080,
    env: 'development',
    proxy: process.env.PROXY
  },
  production: {
    port: process.env.PORT || 8080,
    env: 'production',
    proxy: process.env.PROXY
  }
}

const env = process.env.NODE_ENV || 'development'
export default config[env]