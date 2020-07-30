import jwt from 'jsonwebtoken'

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).json({ message: 'Unauthorized request' })

  const token = authHeader.split(' ')[1]
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded

    next()

  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' })
  }

}

const generateAuthToken = (doctorId, email) => {
  const token = jwt.sign({ doctorId, email}, process.env.JWT_SECRET)
  return token
}
export { generateAuthToken }