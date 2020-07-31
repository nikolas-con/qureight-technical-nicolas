import { firestore } from '../../services/database'
import bcrypt from 'bcrypt'
import { generateAuthToken } from '../../services/http/middleware/jwt'

const register = async (req, res, next) => {
  const { email, password, fullName, specialtyDoctor } = req.body

  if (!email || !password || !fullName || !specialtyDoctor)
    return res.status(400).json({ message: 'Incomplete request' })

  const { docs: doctorDoc } = await firestore.collection('doctor').where('email', '==', email).get()

  if (doctorDoc.length)
    return res.status(400).json({ message: 'This is an existig doctor' })

  const hash = await bcrypt.hash(password, 10)

  const doctor = await firestore.collection('doctor').add({ email, hash, fullName, specialtyDoctor })

  const token = await generateAuthToken(doctor.id, email)

  res.status(200).json({ token })

}

export default register