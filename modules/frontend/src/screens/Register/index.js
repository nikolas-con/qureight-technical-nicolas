import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../utilities/store/doctor/actions'
import { Pane, Button, TextInput } from 'evergreen-ui'
import './style.scss'

const Register = () => {

  const [specialtyDoctor, setSpecialtyDoctor] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleRegister = () => {
    dispatch(register(specialtyDoctor, fullName, email, password))
  }

  return (
    <Pane className="register-container">
      <Pane className="register-title">
        <span>Register</span>
      </Pane>
      <Pane className="register-form">
        <TextInput onChange={(e) => setFullName(e.target.value)}  type="text" placeholder="Full Name" name="fullName" required />
        <TextInput onChange={(e) => setSpecialtyDoctor(e.target.value)}  type="text" placeholder="Specialty" name="specialtyDoctor" required />
        <TextInput onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email" name="email" required />
        <TextInput onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password" name="password" required />
        <Button onClick={handleRegister} marginTop={4} appearance="primary">Register</Button>
      </Pane>
    </Pane>
  )
}

export default Register