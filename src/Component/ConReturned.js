import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { returnor, recvOr, packor } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

const ButtonCancel = styled.button`
  background: #A09797;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`
const ButtonNext = styled.button`
  background: #EF3F3E;
  border-radius: 10px;
  border: 2px;
  color: #000000;
`

class ConReturned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  render() {
    return (
      <div className="bg">
        <Paper className='PaperReturn' >
          <p className='txtReturn1'>Date</p>
          <div style={{ paddingLeft: 763, paddingTop: 63 }}>
            <input type="text" style={{ fontSize: 24, width: 483 }} />
          </div>
          <p className='txtReturn2'>Returned Name</p>
          <div style={{ paddingLeft: 913, paddingTop: 23 }}>
            <input type="text" style={{ fontSize: 24, }} />
          </div>
          <p className='txtReturn3'>Tel.</p>
          <div style={{ paddingLeft: 763, paddingTop: 38 }}>
            <input type="text" style={{ fontSize: 24, width: 483 }} />
          </div>
          <p className='txtReturn4'>Description</p>
          <div style={{ paddingLeft: 630, paddingTop: 85 }}>
            <textarea type="text" max="10" style={{ fontSize: 24, paddingBottom: 100, width: 615, }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ paddingLeft: 1500, paddingTop: 160 }}>
              <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/orderConfirm')}>
                Cancel
            </ButtonCancel>
            </div>
            <div style={{ paddingLeft: 10 ,paddingTop: 160 }}>
              <ButtonNext style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/orderConfirm/returned/returnedChart')}>
                Next
            </ButtonNext>
            </div>
          </div>


        </Paper>

        <Hamburger page='RETURNED ORDER' user={this.state.user} />

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

export default connect(mapStateToProps, mapDispatchToProps)(ConReturned);