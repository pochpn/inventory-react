import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, } from 'recharts';

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'

import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }
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
          <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        </Paper>
        <Paper className="paperTI" >
          <div>

          </div>
        </Paper>
        <Paper className="paperIL" >
          <div>

          </div>
        </Paper>
        <Paper className="paperOTW" >
          <div>

          </div>
        </Paper>
        <Paper className="paperDam" >
          <div>

          </div>
        </Paper>
        <Paper className="paperTO" >
          <div>

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
    accountList: state.accountReducer.accountList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);