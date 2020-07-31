import React, { useState } from 'react'
import { Pane, TextInput, Textarea, Button } from 'evergreen-ui'
import { useDispatch } from 'react-redux'
import { deleteRecord, edit } from '../../../utilities/store/patientRecords/actions'
import './style.scss'

const Buttons = ({ setEdited, edited, handlingSummit, handlingDelete }) => {

  if (edited) {
    return (
      <Pane>
        <Button onClick={() => setEdited(!edited)} appearance="minimal" intent="none" >Edit</Button>
        <Button onClick={handlingDelete} appearance="minimal" intent="none">Delete</Button>
      </Pane>
    )
  } else {
    return (
      <Pane>
        <Button onClick={handlingSummit} appearance="minimal" intent="none">Summit</Button>
      </Pane>
    )
  }
}

const PatientRecord = ({ fullName, age, notes, height, patientRecordId, dateOfBirth }) => {
  const dispatch = useDispatch()
  const [edited, setEdited] = useState(true)
  const [fullNameEdited, setFullNameEdited] = useState(fullName)
  const [heightEdited, setHeightEdited] = useState(height)
  const [notesEdited, setNotesEdited] = useState(notes)
  const [dateOfBirthEdited, setDateOfBirthEdited] = useState(dateOfBirth)

  const handlingSummit = () => {
    const editedfields = {
      fullName: fullNameEdited,
      height: heightEdited,
      notes: notesEdited,
      dateOfBirth: dateOfBirthEdited
    }
    dispatch(edit(patientRecordId, editedfields))
    setEdited(!edited)
  }
  const handlingDelete = () => {
    dispatch(deleteRecord(patientRecordId))
  }
  return (
    <Pane className="patient-record-container">
      <TextInput disabled={edited} onChange={(e) => setFullNameEdited(e.target.value)} value={fullNameEdited} type="text" placeholder="Full Name" name="fullName" required />
      <TextInput disabled={edited} onChange={(e) => setHeightEdited(e.target.value)} value={heightEdited} type="text" placeholder="height in centimetres" name="height" required />
      <TextInput disabled={edited} onChange={(e) => setDateOfBirthEdited(e.target.value)} value={edited ? age : dateOfBirthEdited} type={edited ? 'text' : 'date'} placeholder="Date of birth (ex.2020-01-21)" name="age" required />
      <Textarea disabled={edited} width={100} onChange={(e) => setNotesEdited(e.target.value)} value={notesEdited} placeholder="Notes" name="notes" required />
      <Buttons handlingSummit={handlingSummit} handlingDelete={handlingDelete} setEdited={setEdited} edited={edited} />
    </Pane>
  )
}

export default PatientRecord