import { firestore } from '../../services/database'

const read = async (req, res) => {

  const { doctorId } = req.doctor

  const { docs: patientRecordsDocs } = await firestore.collection('patientRecords').where('doctorId', '==', doctorId).get()

  const patientRecords = patientRecordsDocs.map((doc) => (doc.data()))
  
  res.status(200).json({ patientRecords })
}
export default read