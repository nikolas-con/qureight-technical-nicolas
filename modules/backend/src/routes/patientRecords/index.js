import express from 'express'
import create from './craete'
import { verifyJWT } from '../../services/http/middleware/jwt'
import read from './read'
import edit from './edit'
import deleteRecord from './delete'
import 'express-async-errors'
const patientRecordsRoute = express.Router()

patientRecordsRoute.post('/create', verifyJWT, create)
patientRecordsRoute.get('/read', verifyJWT, read)
patientRecordsRoute.put('/edit/:patientRecordId', verifyJWT, edit)
patientRecordsRoute.delete('/delete/:patientRecordId', verifyJWT, deleteRecord)

export default patientRecordsRoute
