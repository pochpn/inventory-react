import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bg">
        <Topbar page='HISTORY'/>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>History</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <a1>Types</a1>
              <input type="text" />
            </div>
            <div>
              <a1>Receipt ID</a1>
              <input type="text" />
            </div>
            <div>
              <a1>Duration date</a1>
              <input type="text" />
              <a1>-</a1>
              <input type="text" />
            </div>
            <button>
              Search
                </button>
          </div>
        </div>
      </div>

    )
  }
}
export default History;