import express from 'express'
import authDoctorRoute from './authDoctor'
import patientRecordsRoute from './patientRecords'

const router = express.Router()

router.use('/auth/doctor',authDoctorRoute)
router.use('/records',patientRecordsRoute)

export default router