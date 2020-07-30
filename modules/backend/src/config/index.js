const config = {
  development: {
    port: process.env.PORT || 8080,
    env: 'development',
    url: process.env.SERVER_URL,
  },
  production: {
    port: process.env.PORT || 8080,
    env: 'production',
    url: process.env.SERVER_URL,
  },
}
const env = process.env.NODE_ENV || 'development'
export default config[env]
