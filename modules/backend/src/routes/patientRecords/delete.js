import { firestore } from '../../services/database'
const deleteRecord = async (req, res) => {
  const { patientRecordId } = req.params

  const { doctorId } = req.doctor

  const patientRecordDoc = await firestore.collection('patientRecords').doc(patientRecordId).get()

  const patientRecord = patientRecordDoc.data()

  if (patientRecord.doctorId !== doctorId)
    return res.status(401).json({ message: 'This doctor is unauthorized for this patient' })

  await firestore.collection('patientRecords').doc(patientRecordId).delete()

  res.status(200).send()
}

export default deleteRecord