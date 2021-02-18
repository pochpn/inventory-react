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
            <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Stock</h1>
            </div>
            <button onClick={() => history.push('/stock/viewStock')}>
                View Stock
            </button>
            <button onClick={() => history.push('/stock/countingStock')}>
                Counting Stock
            </button>
            <button onClick={() => history.push('/stock/editStock')}>
                Edit Stock
            </button>
      </div>
    )
  }
}

export default Dashboard;
