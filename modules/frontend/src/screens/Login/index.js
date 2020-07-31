import React, { useState } from 'react'
import { login } from '../../utilities/store/doctor/actions'
import { useDispatch } from 'react-redux'
import { Button, Pane, TextInput } from 'evergreen-ui'
import { useHistory } from 'react-router-dom'
import './style.scss'

const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(login(email, password))
  }

  return (
    <Pane className="login-container">
      <Pane className="login-title">
        <span>Login</span>
      </Pane>
      <Pane className="login-form">
        <TextInput onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" name="email" required />
        <TextInput onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="password" required />
        <Button marginTop={4} appearance="primary" onClick={handleLogin}>Login</Button>
      </Pane>
      <Button onClick={()=> history.replace('/register')} marginTop={4} height={40} appearance="minimal" intent="none">Go To Register</Button>
    </Pane>
  )
}

export default Login