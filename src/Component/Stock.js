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
        <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={() => history.push('/stock/viewStock')}>
                View Stock
            </button>
            <button onClick={() => history.push('/stock/countingStock')}>
                Counting Stock
            </button>
            <button>
                Edit Stock
            </button>
      </div>
    )
  }
}

export default Dashboard;
