import { CREATE_PATIENT_RECORD, READ_PATIENT_RECORD, DELETE_PATIENT_RECORD, EDIT_PATIENT_RECORD } from './types'
import axiosInstance from '../../../utilities/axios'


const create = (fullName, notes, height, dateOfBirth) => {
  return async (dispatch) => {
    const response = await axiosInstance.post('/api/records/create', { fullName, notes, height, dateOfBirth })
    dispatch({ type: CREATE_PATIENT_RECORD, payload: { patientRecords: response.data.patientRecords } })
  }
}

const read = ()=> {
  return async (dispatch) => {
    const response = await axiosInstance.get('/api/records/read')
    dispatch({ type: READ_PATIENT_RECORD, payload: { patientRecords: response.data.patientRecords } })
  }
}
const deleteRecord = (patientRecordId)=> {
  return async (dispatch) => {
    await axiosInstance.delete(`api/records/delete/${patientRecordId}`)
    dispatch({ type: DELETE_PATIENT_RECORD, payload: { patientRecordId } })
  }
}
const edit = (patientRecordId,{fullName, dateOfBirth, notes, height})=> {
  return async (dispatch) => {
    const response = await axiosInstance.put(`/api/records/edit/${patientRecordId}`, {fullName, dateOfBirth, notes, height})
    dispatch({ type: EDIT_PATIENT_RECORD, payload: { patientRecords: response.data.patientRecords } })
  }
}



export { create, read, deleteRecord, edit }