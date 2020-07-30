import { AUTHNTICATE } from './types'
import axiosInstance from '../../../utilities/axios'


const login = (email, password) => {
  return async (dispatch) => {
    const response = await axiosInstance.post('/api/auth/doctor/login', { email, password })
    localStorage.setItem("token", response.data.token)
    dispatch({ type: AUTHNTICATE, payload: { token: response.data.token } })
  }
}

const register = (specialtyDoctor, fullName, email, password) => {
  return async (dispatch) => {
    const response = await axiosInstance.post('/api/auth/doctor/register', { specialtyDoctor, fullName, email, password })
    localStorage.setItem("token", response.data.token)
    dispatch({ type: AUTHNTICATE, payload: { token: response.data.token } })
  }
}

export { login, register }