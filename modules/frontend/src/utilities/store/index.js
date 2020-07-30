import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

const middlweare = [thunk]

const store = createStore(
  reducer,
  applyMiddleware(...middlweare)
)

export default store
