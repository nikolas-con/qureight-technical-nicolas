import { AUTHNTICATE } from './types'

const token = localStorage.getItem("token")

const initialState = {
  doctor: {token}
}

const doctorReducer = (state = initialState, actions) => {
  switch (actions.type){
    case AUTHNTICATE:
      return {
        ...state,
        doctor: {...actions.payload}
      } 
    default: 
      return state
  }
}

export default doctorReducer