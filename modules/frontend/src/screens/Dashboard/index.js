import React from 'react'
import { Pane } from 'evergreen-ui'
import AddPatientRecord from '../../components/dashboard/AddPatientRecord'
import ListOfPatientRecord from '../../components/dashboard/ListOfPatientRecord'
import './style.scss'

const Dashboard = () => {
  
  return (
    <Pane className="dashboard-container">
      <Pane className="dashboard-title">
        <span>Dashboard</span>
      </Pane>
      <AddPatientRecord/>
      <ListOfPatientRecord/>
    </Pane>
  )
}


export default Dashboard