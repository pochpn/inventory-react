import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'

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

  render() {
    return (
      <div className="bg">
        <Paper className="paperABC" >
          <div>
            
          </div>
        </Paper>
        <Paper className="paperTT" >
          <div>
            
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