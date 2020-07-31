import { CREATE_PATIENT_RECORD, READ_PATIENT_RECORD, DELETE_PATIENT_RECORD, EDIT_PATIENT_RECORD } from './types'

const initialState = {
  patientRecords: []
}

const patientRecordsReducer = (state = initialState, actions) => {
  const copyPatientRecords = [...state.patientRecords]
  switch (actions.type) {
    case CREATE_PATIENT_RECORD:
      copyPatientRecords.push(actions.payload.patientRecords)
      return {
        ...state,
        patientRecords: [...copyPatientRecords]
      }
    case READ_PATIENT_RECORD:
      return {
        ...state,
        patientRecords: [...actions.payload.patientRecords]
      }

    case DELETE_PATIENT_RECORD:
      const deletedIndex = copyPatientRecords.indexOf(actions.payload.patientRecordId)
      copyPatientRecords.splice(deletedIndex, 1)
      return {
        ...state,
        patientRecords: [...copyPatientRecords]
      }
    case EDIT_PATIENT_RECORD:
      const editedIndex = copyPatientRecords.indexOf(actions.payload.patientRecords.patientRecordId)
      copyPatientRecords.splice(editedIndex, 1,  actions.payload.patientRecords)
      return {
        ...state,
        patientRecords: [...copyPatientRecords]
      }

    default: 
      return state
  }
}

export default patientRecordsReducer