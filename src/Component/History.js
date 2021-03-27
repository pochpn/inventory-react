import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Paper from '@material-ui/core/Paper';
import { search } from '../pic'
import Hamburger from './Hamburger'
import styled, { css } from 'styled-components'

import { connect } from 'react-redux';
import { AiOutlineUserAdd } from "react-icons/ai";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Startdate: new Date(),
      Enddate: new Date(),
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  onChangeStart = Startdate => {
    this.setState({ Startdate: Startdate })
  }

  onChangeEnd = Enddate => {
    this.setState({ Enddate: Enddate })
  }

  onSearch = () => {
    console.log(this.state.Startdate.getDate() + '/' + (this.state.Startdate.getMonth() + 1) + '/' + this.state.Startdate.getFullYear())
  }

  onCheck = (item) => {
    history.push({
      pathname: '/history/billOHis',
      state: {
        bill: item,
      },
    })
  }

  render() {
    return (
      <div className="bg">
        <Paper className="paperSearchMB" style={{ display: 'flex', justifyContent: 'center' }} >
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 26, fontWeight: 'lighter' }}>Types</a1>
            <input type="text" style={{ width: 160, fontSize: 18, borderWidth: 0 }} ></input>
          </div>
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 26, fontWeight: 'lighter' }}>Receipt ID</a1>
            <input type="text" style={{ width: 200, fontSize: 18, borderWidth: 0 }}></input>
          </div>
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 26, fontWeight: 'lighter' }}>Duration Date</a1>
            <DatePicker style={{ width: "100%" }} selected={this.state.Startdate} onChange={this.onChangeStart} dateFormat='dd/MM/yyy' />
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 26, fontWeight: 'lighter' }}> - </a1>
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column' }}>
            <DatePicker style={{ width: "100%" }} selected={this.state.Enddate} onChange={this.onChangeEnd} dateFormat='dd/MM/yyy' />
          </div>
          <img
            style={{ width: "10%", paddingTop: 15 }}
            src={search}
            onClick={this.onSearch}></img>
        </Paper>

        <Paper className='tableHis' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Font>No.</Font>
            <Font>Date</Font>
            <Font>Receipt ID</Font>
            <Font>Description</Font>
            <Font>OIC</Font>
          </div>
        </Paper>
        
        <scroll>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {this.props.billList.map((item) => {
              if (item.confirm && (item.type === 'PO')) {
                return (
                  <div className="paperHistory" style={{ display: 'flex', flexDirection: 'row', borderRadius: '30px', width: '97%', backgroundColor: 'black' }} onClick={() => this.onCheck(item)}>
                    <p className='txtHis' style={{}}>{item.info.reNum}|</p>
                    <p className='txtHis' style={{}}>{item.info.date}|</p>
                    <p className='txtHis' style={{}}>{item.info.contactName}|</p>
                    <p className='txtHis' style={{}}>{item.info.telCon}</p>
                  </div>
                )
              }
            })}
          </div>
        </scroll>
        
        <Hamburger page='HISTORY' user={this.state.user} />
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

export default connect(mapStateToProps, mapDispatchToProps)(History);
