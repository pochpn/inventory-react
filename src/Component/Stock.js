import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import { counting, viewstock, editstock } from '../pic'
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';


class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userList[this.props.userList.length - 1],
    };
  }

  render() {
    return (
      <div className="bg">
        <Hamburger page='STOCK & COUNTING' user={this.state.user} />
        <div style={{ display: 'flex', flexDirection: 'row',paddingTop:'19%',justifyContent:'center'}}>
          <Paper className="paperVs" style={{borderRadius:"10%"}} onClick={() => history.push('/stock/viewStock')}>
            <div>
              <img className="imVs2" src={viewstock} />
              <p className="textSto1">View Stock</p>
            </div>
          </Paper>

          <Paper className="paperVs" style={{borderRadius:"10%"}} onClick={() => history.push('/stock/countingStock')}>
            <div>
              <img className="imVs" src={counting} />
              <p className="textSto2">Counting Stock</p>
            </div>
          </Paper>

          <Paper className="paperVs" style={{borderRadius:"10%"}} onClick={() => history.push('/stock/editStock')}>
            <div>
              <img className="imVs" src={editstock} />
              <p className="textSto3">Edit Stock</p>
            </div>
          </Paper>

        </div>
      </div>

    )
  }
};


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

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
