import express from 'express'
import authDoctorRoute from './authDoctor'

const router = express.Router()

router.use('/auth/doctor',authDoctorRoute)

export default router