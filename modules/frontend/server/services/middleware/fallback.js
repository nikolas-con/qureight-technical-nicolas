import path from 'path'

const fallbackMiddleware = (_, res) => {
  const filePath = path.join(__dirname, '../../web/index.html')
  res.sendFile(filePath)
}

export { fallbackMiddleware }