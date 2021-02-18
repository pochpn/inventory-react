import React, { Component } from 'react'
import history from '../history'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <h1>Dashboard</h1>
            </div>
      </div>
    )
  }
}

export default Dashboard;
