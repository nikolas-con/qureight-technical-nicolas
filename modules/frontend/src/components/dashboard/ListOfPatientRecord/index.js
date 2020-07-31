import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { read } from '../../../utilities/store/patientRecords/actions'
import PatientRecord from '../PatientRecord'

const ListOfPatientRecord = () => {
  const dispatch = useDispatch()
  const { patientRecords } = useSelector(state => state.patientRecordsReducer)

  useEffect(() => {
    dispatch(read())
  }, [])
  
  return (
    <>
      {patientRecords.map(patientRecord => <PatientRecord key={patientRecord.patientRecordId} {...patientRecord} />)}
    </>
  )
}

export default ListOfPatientRecord