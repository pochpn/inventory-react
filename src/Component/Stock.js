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
            <button>
                View Stock
            </button>
            <button>
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
