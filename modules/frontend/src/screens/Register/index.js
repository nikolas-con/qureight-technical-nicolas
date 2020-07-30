import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../utilities/store/doctor/actions'
import './style.css'

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
    <div className="register-container">
      <h1>Register</h1>
      <div className="register-form">
      <input onChange={(e)=> setFullName(e.target.value)} className="register-inputs" type="text" placeholder="Enter Your Full Name" name="fullName" required/>
      <input onChange={(e)=> setSpecialtyDoctor(e.target.value)} className="register-inputs" type="text" placeholder="Enter Your specialty" name="specialtyDoctor" required/>
      <input onChange={(e)=> setEmail(e.target.value)} className="register-inputs" type="email" placeholder="Enter Email" name="email" required/>
      <input onChange={(e)=> setPassword(e.target.value)} className="register-inputs" type="password" placeholder="Enter Password" name="password" required/>
      <button onClick={handleRegister} className="register-button" type="submit">Register</button>
    </div>
    </div>
  )
}

export default Register