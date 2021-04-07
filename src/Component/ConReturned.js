import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { returnor, recvOr, packor } from '../pic'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      date: new Date(),
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  render() {
    return (
      <div className="bg">
        <Hamburger page='RETURNED ORDER' user={this.state.user} />
        <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '0.25%', paddingTop: '9%', justifyContent: 'center' }}>
          <Paper className='paperOrdering' >
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '3.5%', paddingLeft: '34%' }}>
              <p className='textOr' style={{ paddingRight: '3%', }}>Date</p>
              <DatePicker style={{ width: 300 }} selected={this.state.date} onChange={date => this.setState({ date: date })} dateFormat='dd/MM/yyy' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '2%', paddingLeft: '34%' }}>
              <p className='textOr' style={{ paddingRight: '3%', paddingTop: '1%' }}>Returned Name</p>
              <input type="text" style={{ fontSize: 24, width: 351}} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '2%', paddingLeft: '34%' }}>
              <p className='textOr' style={{ paddingRight: '3%', paddingTop: '1%' }}>Tel.</p>
              <input type="text" style={{ fontSize: 24, width: 533 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'flex-start', paddingTop: '2%', paddingLeft: '34%' }}>
              <p className='textOr' >Description</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'flex-start', paddingLeft: '34%' }}>
              <textarea type="text" max="10" style={{ fontSize: 24, paddingBottom: 100, width: 615, }} />
            </div>




            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ paddingLeft: 1500, paddingTop: 160 }}>
                <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/orderConfirm')}>
                  Cancel
            </ButtonCancel>
              </div>
              <div style={{ paddingLeft: 10, paddingTop: 160 }}>
                <ButtonNext style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/orderConfirm/returned/returnedChart')}>
                  Next
            </ButtonNext>
              </div>
            </div>
          </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConReturned);