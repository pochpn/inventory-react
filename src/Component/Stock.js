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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: "14%" }}>
          <Paper className="paper1" onClick={() => history.push('/stock/viewStock')}>
            <div>
              <img className="im1" src={viewstock} />
              <p className="textDb">View Stock</p>
            </div>
          </Paper>

          <MDBRow>
            <MDBCard className="paper" style={{  }} onClick={() => history.push('/stock/viewStock')}>
              <MDBCardImage
                className="img-fluid d-flex justify-content-center"
                src={viewstock} />
              <div class="d-flex justify-content-center">
                <MDBCardTitle >View Stock</MDBCardTitle>
              </div>
            </MDBCard>

            <MDBCard className="paper" style={{ width: "18rem", margin: "1.2rem", borderRadius: "8%" }} onClick={() => history.push('/stock/countingStock')}>
              <MDBCardImage
                className="img-fluid d-flex justify-content-center"
                src={counting} />
              <div class="d-flex justify-content-center">
                <MDBCardTitle>Counting Stock</MDBCardTitle>
              </div>

            </MDBCard>

            <MDBCard className="paper" style={{ width: "18rem", margin: "1.2rem", borderRadius: "8%" }} onClick={() => history.push('/stock/editStock')}>
              <MDBCardImage
                className="img-fluid d-flex justify-content-center"
                src={editstock} />
              <div class="d-flex justify-content-center">
                <MDBCardTitle>Edit Stock</MDBCardTitle>
              </div>

            </MDBCard>
          </MDBRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
