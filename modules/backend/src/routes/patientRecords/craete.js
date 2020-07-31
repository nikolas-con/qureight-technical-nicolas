import { firestore } from '../../services/database'
import ageCalculator from './ageCalculator'

const create = async (req, res) => {
  const { doctorId } = req.doctor

  const { dateOfBirth, fullName, notes, height } = req.body
  
  if (!dateOfBirth || !fullName || !notes || !height)
    return res.status(400).json({ message: 'Incomplete request' })

  const patientRecords = { doctorId, fullName, age: ageCalculator(dateOfBirth), notes, height }

  const patientRecordsDoc = await firestore.collection('patientRecords').add(patientRecords)

  patientRecords.id = patientRecordsDoc.id
  
  res.status(200).json({ patientRecords })
}

export default create
