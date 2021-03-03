import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import { connect } from 'react-redux';

import Hamburger from './Hamburger'


class EditStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  render() {
    return (
      <div className="bg">
        <Hamburger page='EDIT STOCK' user={this.state.user} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <button>
              Edit Shelf
                </button>
            <button>
              Edit Products
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

export default connect(mapStateToProps, mapDispatchToProps)(EditStock);

