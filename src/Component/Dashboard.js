import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ComposedChart, Line, CartesianGrid } from 'recharts';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import './Modal.css';

import { formatMoney } from '../formatMoney'

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
      typeA: 0,
      typeB: 0,
      typeC: 0,
      inventLv: 0,
      jVal : 0,
      fVal :0,
      mVal : 0,
      aVal : 0,
      mayVal: 0,
      junVal : 0,
      julVal : 0,
      augVal : 0,
      sepVal : 0,
      octVal :0,
      novVal:0,
      decVal: 0,
    };

    this.props.productList.forEach((item) => {
      if (item.type === 'A') {
        this.setState({ typeA: this.state.typeA += parseInt(item.qty) })
      }
      if (item.type === 'B') {
        this.setState({ typeB: this.state.typeB += parseInt(item.qty) })
      }
      if (item.type === 'C') {
        this.setState({ typeC: this.state.typeC += parseInt(item.qty) })
      }
      this.setState({ inventLv: this.state.inventLv += (parseInt(item.costPunit)*parseInt(item.qty)) })
      if(item.recvDate.split("/")[1] ==="1" || item.recvDate.split("/")[1] ==="01"){
        this.setState({jVal: this.state.jVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
        console.log("from 1")
      }
      if(item.recvDate.split("/")[1] ==="2" || item.recvDate.split("/")[1] ==="02"){
        console.log("from 2")
        this.setState({fVal: this.state.fVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="3" || item.recvDate.split("/")[1] ==="03"){
        console.log("from 3")
        this.setState({mVal: this.state.mVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="4" || item.recvDate.split("/")[1] ==="04"){
        this.setState({aVal: this.state.aVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
        console.log("from 4")
      }
      if(item.recvDate.split("/")[1] ==="5" || item.recvDate.split("/")[1] ==="05"){
        console.log("from 5")
        this.setState({mayVal: this.state.mayVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="6"|| item.recvDate.split("/")[1] ==="06"){
        console.log("from 6")
        this.setState({junVal: this.state.junVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="7" || item.recvDate.split("/")[1] ==="07"){
        console.log("from 7")
        this.setState({julVal: this.state.julVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="8" || item.recvDate.split("/")[1] ==="08"){
        console.log("from 8")
        this.setState({augVal: this.state.augVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="9" || item.recvDate.split("/")[1] ==="09"){
        console.log("from 9")
        this.setState({sepVal: this.state.sepVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="10"){
        console.log("from 10")
        this.setState({octVal: this.state.octVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="11"){
        console.log("from 11")
        this.setState({novVal: this.state.novVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
      if(item.recvDate.split("/")[1] ==="12"){
        console.log("from 12")
        this.setState({decVal: this.state.decVal += (parseInt(item.costPunit)*parseInt(item.qty)) })
      }
    })
  }

  COLORS = ['#0088FE', '#00C49F', '#FFBB28',];


  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
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
    let pieData = [
      {
        "name": "TypeA",
        "value": this.state.typeA
      },
      {
        "name": "TypeB",
        "value": this.state.typeB
      },
      {
        "name": "TypeC",
        "value": this.state.typeC
      },
    ];
    console.log(pieData[0].value)
    let barData = [
      {
        name: 'Jan', value: this.state.jVal, turnover: 2.2,
      },
      {
        name: 'Feb', value: this.state.fVal, turnover: 2.25,
      },
      {
        name: 'Mar', value: this.state.mVal, turnover: 2.55,
      },
      {
        name: 'Apr', value: this.state.aVal, turnover: 3.12,
      },
      {
        name: 'May', value: this.state.mayVal, turnover: 3.0,
      },
      {
        name: 'Jun', value: this.state.junVal, turnover: 1.65,
      },
      {
        name: 'Jul', value: this.state.julVal, turnover: 2.15,
      },
      {
        name: 'Aug', value: this.state.augVal, turnover: 2.75,
      },
      {
        name: 'Sep', value: this.state.sepVal, turnover: 2.15,
      },
      {
        name: 'Oct', value: this.state.octVal, turnover: 2.15,
      },
      {
        name: 'Nov', value: this.state.novVal, turnover: 0.55,
      },
      {
        name: 'Dec', value: this.state.decVal, turnover: 2.25,
      },
    ];
    console.log(this.state.mVal)
    return (
      <div className="bg">


        <Paper className="paperTI" >
          <div>
            <p className="txtTi">TOP ITEM</p>
          </div>
        </Paper>
        <Paper className="paperIL" >
          <div>
            <p className="txtIl">Inventory Levels</p>
            <p className="txtIl" style={{ paddingTop: '25%', fontSize: '50px' }}>{formatMoney(this.state.inventLv.toFixed(2))}</p>
            <p className="txtIl" style={{ paddingLeft: '75%', paddingTop: '25%', fontSize: '50px' }}> ฿</p>
          </div>
        </Paper>
        <Paper className="paperDam" >
          <div>
            <p className="txtDam">Damage value this month</p>
            <p className="txtIl" style={{ paddingLeft: '75%', paddingTop: '25%', fontSize: '50px' }}>฿</p>
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
        <Paper className="paperABC" >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <PieChart width={730} height={300}>
              <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                {
                  pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                }
              </Pie>
              <Tooltip content={<this.CustomTooltip />} />
              <Legend />
            </PieChart>
          </div>
        </Paper>
        <Paper className="paperTT" >
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingRight : 50 }}>
              <ComposedChart
                width={700}
                height={420}
                data={barData}
                margin={{
                  top: 50, right: 0, bottom: 100, left: 0,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="turnover" stroke="#ff7300" />
              </ComposedChart>
            </div>
          </div>
        </Paper>
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
    accountList: state.accountReducer.accountList,
    productList: state.productReducer.productList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);