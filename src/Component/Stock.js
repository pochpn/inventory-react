import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bg">
        <Topbar />


        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingTop:"11%" }}>
          <MDBRow>
            <MDBCard style={{width: "18rem" ,margin:"1rem"}} onClick={() => history.push('/stock/viewStock')}>
              <MDBCardImage
                className="img-fluid"
                src="https://uppic.cc/d/hQKChem6SpIiFFxAn439Y"/>
                <div class="d-flex justify-content-center">
                  <MDBCardTitle >View Stock</MDBCardTitle>
                </div> 
            </MDBCard>

            <MDBCard style={{ width: "18rem" ,margin:"1rem"}} onClick={() => history.push('/stock/countingStock')}>
              <MDBCardImage
                style={{width: "100%",resizeMode: 'contain'}}
                className="img-fluid"
                src="https://uppic.cc/d/9vOtr_EuhpJRMurA4UXvp"/>
              <div class="d-flex justify-content-center">
                <MDBCardTitle>Counting Stock</MDBCardTitle>
              </div> 
              
            </MDBCard>

            <MDBCard style={{ width: "18rem",margin:"1rem" }} onClick={() => history.push('/stock/editStock')}>
              <MDBCardImage
                className="img-fluid"
                src="https://uppic.cc/d/0W3RIXMsbwLZibPPoOvcF"/>
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

export default Dashboard;
