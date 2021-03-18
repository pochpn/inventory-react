import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Paper from '@material-ui/core/Paper';
import { search } from '../pic'
import Hamburger from './Hamburger'


import { connect } from 'react-redux';
import { AiOutlineUserAdd } from "react-icons/ai";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    console.log(this.state.Startdate.getDate()+'/'+(this.state.Startdate.getMonth()+1)+'/'+this.state.Startdate.getFullYear())
  }

  render() {
    return (
      <div className="bg">
        <Paper className="paperSearchMB" >
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Types</a1>
            <input type="text" style={{ width: 300, fontSize: 18, borderWidth: 0 }} ></input>
          </div>
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Receipt ID</a1>
            <input type="text" style={{ width: 300, fontSize: 18, borderWidth: 0 }}></input>
          </div>
          <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Duration Date</a1>
            <DatePicker style={{ width: 300 }} selected={this.state.Startdate} onChange={this.onChangeStart} dateFormat='dd/MM/yyy' />

            {/* <input type="text" style={{ width: 300, fontSize: 24, borderWidth: 0 }}></input> */}
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column' }}>
            <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}> - </a1>
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column' }}>
            <DatePicker style={{ width: 100 }} selected={this.state.Enddate} onChange={this.onChangeEnd} dateFormat='dd/MM/yyy' />

            {/* <input type="text" style={{ width: 300, fontSize: 24, borderWidth: 0 }}></input> */}
          </div>
          <img
            style={{ justifyContent: 'flex-end', width: "10%", }}
            src={search}
            onClick={this.onSearch}></img>
        </Paper>
        <Paper className='tableHis'>
          <p className="txtTableHis1">No.</p>
          <p className="txtTableHis2">Date</p>
          <p className="txtTableHis3">Receipt ID</p>
          <p className="txtTableHis4">Description</p>
          <p className="txtTableHis5">OIC</p>
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
