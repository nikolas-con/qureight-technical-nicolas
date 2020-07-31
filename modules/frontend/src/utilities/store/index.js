import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import doctorReducer from './doctor/reducer'
import patientRecordsReducer from './patientRecords/reducer'
const middlweare = [thunk]
const rootReducer = combineReducers({
  doctorReducer,
  patientRecordsReducer
})
 
const store = createStore(
  rootReducer,
  applyMiddleware(...middlweare)
)

export default store
