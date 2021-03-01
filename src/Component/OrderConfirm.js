import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import { connect } from 'react-redux';

class OrderConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  render() {
    return (
      <div className="bg">
        <Topbar page='ORDER CONFIRMATION' />
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

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    accountList: state.accountReducer.accountList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm);
