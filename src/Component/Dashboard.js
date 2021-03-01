import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bg">
        <Topbar page='DASHBOARD'/>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
      </div>
      
    )
  }
}

export default Dashboard;
