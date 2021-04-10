import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { returnor, recvOr, packor } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

const Font = styled.div`
  && {
    color: #000000;
    font-size: 30px;
    width: 250px;
    font-weight: lighter;
  }
`

const Font2 = styled.div`
  && {
    color: #000000;
    font-size: 36px;
    font-weight: bold;
  }
`

const Font3 = styled.div`
  && {
    color: #000000;
    font-size: 48px;
    font-weight: bold;
  }
`

class ConPacking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  onCheck = (item) => {
    history.push({
      pathname: '/orderConfirm/packing/billPick2',
      state: {
        bill: item,
      },
    })
  }

  render() {
    return (
      <div className="bg">
        <Paper className='OrConTopic'>
          <p className="txtPakTopic">Picking Order</p>
        </Paper>
        <Paper className='OrConTable'>
          <p className="txtOrConTable1">MR No.</p>
          <p className="txtOrConTable2">Date</p>
          <p className="txtOrConTable3">Contact Name</p>
          <p className="txtOrConTable4">Tel.</p>
        </Paper>

        <Hamburger page='PICKING ORDER' user={this.state.user} />
        <div style={{ paddingTop: 230, paddingLeft: '1%' }}>
          {this.props.billList.map((item) => {
            if (item.managerConfirm && !item.confirm && (item.type === 'MR')) {
              return (
                <div style={{ paddingTop: 20 }} onClick={() => this.onCheck(item)}>
                  <Paper className='paperRcvOd' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <Font>{item.info.reNum}</Font>
                      <Font>{item.info.date}</Font>
                      <Font>{item.info.customerName}</Font>
                      <Font>{item.info.telCus}</Font>
                    </div>
                  </Paper>
                </div>
              );
            }
          })}
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
    accountList: state.accountReducer.accountList,
    billList: state.billReducer.billList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConPacking);