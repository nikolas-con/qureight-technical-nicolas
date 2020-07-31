import { firestore } from '../../services/database'
import ageCalculator from './ageCalculator'

const edit = async (req, res) => {
  const { patientRecordId } = req.params

  const { doctorId } = req.doctor

  const { fullName, dateOfBirth, notes, height } = req.body

  if (!dateOfBirth || !fullName || !notes || !height)
    return res.status(400).json({ message: 'Incomplete request' })

  const patientRecordDoc = await firestore.collection('patientRecords').doc(patientRecordId).get()

  const patientRecord = patientRecordDoc.data()

  if (patientRecord.doctorId !== doctorId)
    return res.status(401).json({ message: 'This doctor is unauthorized for this patient' })

  const patientRecords = { doctorId, fullName, age: ageCalculator(dateOfBirth),dateOfBirth, notes, height }

  await firestore.collection('patientRecords').doc(patientRecordId).update(patientRecords)

  patientRecords.patientRecordId = patientRecordId

  delete patientRecords.doctorId
  
  res.status(200).json({ patientRecords })
}

export default edit