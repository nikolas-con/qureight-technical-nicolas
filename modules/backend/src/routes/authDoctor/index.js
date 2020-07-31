import express from 'express'
import register from './register'
import login from './login'
import 'express-async-errors'

const authDoctorRoute = express.Router()

authDoctorRoute.post('/register',register)

authDoctorRoute.post('/login',login)

export default authDoctorRoute