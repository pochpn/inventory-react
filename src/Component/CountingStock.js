import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import Hamburger from './Hamburger'
import { connect } from 'react-redux';

class CountingStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  render() {
    return (
      <div className="bg">
        <Hamburger page='COUNTING STOCK' user={this.state.user} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <a1>Shelf ID</a1>
              <input type="text" />
            </div>
          </div>
          <a1>Please select stock</a1>
          <div>
            <button>
              S1-01
                </button>
            <button>
              S1-02
                </button>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountingStock);