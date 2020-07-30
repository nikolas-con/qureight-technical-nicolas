import React from 'react'
import { Provider } from 'react-redux'
import store from './utilities/store'
import Router from './utilities/router'

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App