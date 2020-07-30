import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import {useSelector} from 'react-redux'

const Router = ()=> {
  const { token } = useSelector(state => state.doctorReducer.doctor )
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={() =>
          token ? <Redirect to="/" /> : <Login />
        }/>
        <Route exact path="/register" render={() =>
          token ? <Redirect to="/" /> : <Register/>
        }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router