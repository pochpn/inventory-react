import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

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
        <Topbar page='STOCK' />


        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: "11%" }}>
          <MDBRow>
            <MDBCard style={{ width: "18rem", margin: "1rem" }} onClick={() => history.push('/stock/viewStock')}>
              <MDBCardImage
                className="img-fluid"
                src="https://uppic.cc/d/hQKChem6SpIiFFxAn439Y" />
              <div class="d-flex justify-content-center">
                <MDBCardTitle >View Stock</MDBCardTitle>
              </div>
            </MDBCard>

            <MDBCard style={{ width: "18rem", margin: "1rem" }} onClick={() => history.push('/stock/countingStock')}>
              <MDBCardImage
                style={{ width: "100%", resizeMode: 'contain' }}
                className="img-fluid"
                src="https://uppic.cc/d/9vOtr_EuhpJRMurA4UXvp" />
              <div class="d-flex justify-content-center">
                <MDBCardTitle>Counting Stock</MDBCardTitle>
              </div>

            </MDBCard>

            <MDBCard style={{ width: "18rem", margin: "1rem" }} onClick={() => history.push('/stock/editStock')}>
              <MDBCardImage
                className="img-fluid"
                src="https://uppic.cc/d/0W3RIXMsbwLZibPPoOvcF" />
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
