import { firestore } from '../../services/database'
import bcrypt from 'bcrypt'
import { generateAuthToken } from '../../services/http/middleware/jwt'
const login = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ message: 'Incomplete request' })

  const { docs: doctorDoc } = await firestore.collection('doctor').where('email', '==', email).get()

  if (!doctorDoc.length)
    return res.status(404).json({ message: 'This doctor does not exist' })

  const doctor = doctorDoc[0].data()

  doctor.id = doctorDoc[0].id

  const isPasswordMatch = await bcrypt.compare(password, doctor.hash)

  if (!isPasswordMatch)
    return res.status(403).json({ message: 'Wrong password' })

  const token = await generateAuthToken(doctor.id, doctor.email)

  res.status(200).json({ token })
}

export default login