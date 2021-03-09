import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Paper from '@material-ui/core/Paper';
import { search } from '../pic'
import Hamburger from './Hamburger'


import { connect } from 'react-redux';
import { AiOutlineUserAdd } from "react-icons/ai";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // startDate: new Date,
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  

  render() {
    return (
      <div className="bg">
        <Paper className="paperSearchMB" >
          {/* <DatePicker
            selected = {startDate}
            onChange = {date => this.state.date}
            dateFormat = 'dd/MM/yyyy'
            maxDate = {new Date()}
          /> */}
          <div style={{paddingLeft: 50, display: 'flex', flexDirection: 'column'}}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Types</a1>
            <input type="text" style={{ width: 300, fontSize: 24, borderWidth: 0 }} ></input>
          </div>
          <div style={{paddingLeft: 50, display: 'flex', flexDirection: 'column'}}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Receipt ID</a1>
            <input type="text" style={{width: 300, fontSize: 24, borderWidth: 0 }}></input>
          </div>
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column'}}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Duration Date</a1>
            <input type="text" style={{ width: 300, fontSize: 24, borderWidth: 0 }}></input>
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column'}}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}> - </a1>
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column'}}>
            <input type="text" style={{ width: 300, fontSize: 24, borderWidth: 0 }}></input>
          </div>
          <img
            style={{ justifyContent: 'flex-end', width: "10%", }}
            src={search}
            onClick={this.onSearch}></img>
        </Paper>
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
    accountList: state.accountReducer.accountList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
