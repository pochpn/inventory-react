import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { returnor, recvOr, packor } from '../pic'

import styled, { css } from 'styled-components'
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
        <Paper className='OrConRecv'>
          <div>
            <img className="imOrRecv" src={recvOr} />
            <p className="txtOrRecv1">Receiving</p>
            <p className="txtOrCon2">Order</p>
          </div>
        </Paper>
        <Paper className='OrConPak'>
          <div>
            <img className="imOrRecv" src={packor} />
            <p className="txtOrPak1">Packing</p>
            <p className="txtOrCon2">Order</p>
          </div>
        </Paper>
        <Paper className='OrConReturn'>
          <div>
            <img className="imOrRecv" src={returnor} />
            <p className="txtOrRetu1">Returned</p>
            <p className="txtOrCon2">Order</p>
          </div>
        </Paper>
        <Hamburger page='ORDER CONFIRMATION' user={this.state.user} />
        
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
