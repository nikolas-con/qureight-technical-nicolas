import React, { useState } from 'react'
import { login } from '../../utilities/store/doctor/actions'
import './style.css'
import { useDispatch } from 'react-redux'

const Login = () => {

  const dispatch = useDispatch()

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(login(email, password))
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-form">
        <input onChange={(e)=> setEmail(e.target.value)} className="login-inputs" type="email" placeholder="Enter Email" name="email" required/>
        <input onChange={(e)=> setPassword(e.target.value)} className="login-inputs" type="password" placeholder="Enter Password" name="password" required/>
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  )
}

export default Login