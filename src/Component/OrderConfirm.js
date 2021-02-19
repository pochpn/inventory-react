import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

class OrderConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bg">
        <Topbar/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Order Confirmation</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <button>
            Receiving Order
                </button>
          <button>
            Picking Order
                </button>
          <button>
            Returned Order
                </button>
        </div>
      </div>

    )
  }
}

export default OrderConfirm;
