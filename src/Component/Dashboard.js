import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, } from 'recharts';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import './Modal.css';

const ButtonAll = styled.button`
  background: #4A71D6;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`

const ButtonRecv = styled.button`
  background: #559540;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`

const ButtonPick = styled.button`
  background: #FF6060;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`
const ButtonAfter = styled.button`
  background: #C4C4C4;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
      modal1: true,
      modal2: false,
      modal3: false,
    };
  }
  COLORS = ['#0088FE', '#00C49F', '#FFBB28',];

  pieData = [
    {
      "name": "TypeA",
      "value": 10
    },
    {
      "name": "TypeB",
      "value": 20
    },
    {
      "name": "TypeC",
      "value": 70
    },
  ];
  barData = [
    {
      name: '1', value: 4.2,
    },
    {
      name: '2', value: 4.5,
    },
    {
      name: '3', value: 5.1,
    },
    {
      name: '4', value: 6.3,
    },
  ];

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }

    return null;
  };

  handleModalAllR = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal1: !this.state.modal1 });

    this.setState({ modal2: !this.state.modal2 });
  }

  handleModalAllP = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal1: !this.state.modal1 });

    this.setState({ modal3: !this.state.modal3 });
  }

  handleModalRecvA = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal2: !this.state.modal2 });

    this.setState({ modal1: !this.state.modal1 });
  }

  handleModalRecvP = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal2: !this.state.modal2 });

    this.setState({ modal3: !this.state.modal3 });
  }

  handleModalPickA = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal3: !this.state.modal3 });

    this.setState({ modal1: !this.state.modal1 });
  }

  handleModalPickR = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal3: !this.state.modal3 });

    this.setState({ modal2: !this.state.modal2 });
  }

  render() {
    return (
      <div className="bg">
        <Paper className="paperABC" >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <PieChart width={730} height={300}>
              <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                {
                  this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                }
              </Pie>
              <Tooltip content={<this.CustomTooltip />} />
              <Legend />
            </PieChart>
          </div>
        </Paper>
        <Paper className="paperTT" >
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <BarChart
                margin={{ top: 45, right: 30, left: 0, bottom: 0 }}
                width={750}
                height={300}
                data={this.barData}>
                <Bar dataKey="value" fill="#0088FE" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </BarChart>

            </div>
          </div>
        </Paper>
        <Paper className="paperTI" >
          <div>
                <p className="txtTi">TOP ITEM</p>
          </div>
        </Paper>
        <Paper className="paperIL" >
          <div>
                <p className="txtIl">Inventory Levels</p>
                <p className="txtIl" style={{paddingLeft:'75%',paddingTop:'25%' ,fontSize:'50px'}}>฿</p>
          </div>
        </Paper>
        <Paper className="paperDam" >
          <div>
                <p className="txtDam">Damage value this month</p>
                <p className="txtIl" style={{paddingLeft:'75%',paddingTop:'25%' ,fontSize:'50px'}}>฿</p>
          </div>
        </Paper>
        <Paper className="paperTO" >
          <div>
                <p className="txtTo">Total Orders this month</p>
          </div>
        </Paper>

        <div hidden={!this.state.modal1}>
          <div className="modal-backgroundForDash" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="modal-cardDashOTW">
              <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 190 }}>
                <div style={{ paddingLeft: 12 }}>
                  <ButtonRecv style={{ width: 100 }} onClick={this.handleModalAllR}>Receiving</ButtonRecv>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <ButtonAfter style={{ width: 100 }}>All</ButtonAfter>
                </div>
                <div style={{ paddingLeft: 20 }} >
                  <ButtonPick style={{ width: 100 }} onClick={this.handleModalAllP}>Picking</ButtonPick>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div hidden={!this.state.modal2}>
          <div className="modal-backgroundForDash" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="modal-cardDashOTW">
              <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 190 }}>
                <div style={{ paddingLeft: 12 }}>
                  <ButtonAfter style={{ width: 100 }} >Receiving</ButtonAfter>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <ButtonAll style={{ width: 100 }} onClick={this.handleModalRecvA}>All</ButtonAll>
                </div>
                <div style={{ paddingLeft: 20 }} >
                  <ButtonPick style={{ width: 100 }} onClick={this.handleModalRecvP}>Picking</ButtonPick>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div hidden={!this.state.modal3}>
          <div className="modal-backgroundForDash" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="modal-cardDashOTW">
              <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 190 }}>
                <div style={{ paddingLeft: 12 }}>
                  <ButtonRecv style={{ width: 100 }} onClick={this.handleModalPickR}>Receiving</ButtonRecv>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <ButtonAll style={{ width: 100 }} onClick={this.handleModalPickA}>All</ButtonAll>
                </div>
                <div style={{ paddingLeft: 20 }} >
                  <ButtonAfter style={{ width: 100 }}>Picking</ButtonAfter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hamburger page='DASHBOARD' user={this.state.user} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);