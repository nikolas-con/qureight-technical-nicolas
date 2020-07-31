import React, { useState} from 'react'
import {TextInput, Pane, Textarea, Button} from 'evergreen-ui'
import {create} from '../../../utilities/store/patientRecords/actions'
import {useDispatch} from 'react-redux'
import './style.scss'
const AddPatientRecord =()=> {
  const [fullName, setFullName] = useState('')
  const [height, setHeight] = useState('')
  const [notes, setNotes] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const dispatch = useDispatch()

  const handingAdd = () => {
    dispatch(create(fullName, notes, height, dateOfBirth))
    setFullName('')
    setHeight('')
    setNotes('')
    setDateOfBirth('')
  }
  return (
    <Pane className="add-patient-record-container">
      <TextInput onChange={(e)=> setFullName(e.target.value)}  value={fullName} type="text" placeholder="Full Name" name="fullName" required/>
      <TextInput onChange={(e)=> setHeight(e.target.value)} value={height}  type="number"  placeholder="Height in centimetres" name="height" required/>
      <Textarea onChange={(e)=> setNotes(e.target.value)} value={notes}  placeholder="Notes" name="notes" required/>
      <TextInput onChange={(e)=> setDateOfBirth(e.target.value)}  value={dateOfBirth} type="date" min={new Date()} placeholder="Date of birth (ex.2020-01-21)" name="dateOfBirth" required/>
      <Button onClick={handingAdd} appearance="primary" >Add</Button>
    </Pane>
  )
}
export default AddPatientRecord