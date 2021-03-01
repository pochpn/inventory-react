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
        <Topbar page='STOCK'/>


        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: "11%" }}>
          <MDBRow>
            <MDBCard className="paper" style={{ width: "18rem", margin: "1.2rem",borderRadius: "8%",alignItems:'center' }} onClick={() => history.push('/stock/viewStock')}>
              <MDBCardImage
                className="img-fluid d-flex justify-content-center"
                src="https://uppic.cc/d/hQKChem6SpIiFFxAn439Y" />
              <div class="d-flex justify-content-center">
                <MDBCardTitle >View Stock</MDBCardTitle>
              </div>
            </MDBCard>

            <MDBCard className="paper" style={{ width: "18rem", margin: "1.2rem", borderRadius: "8%" }} onClick={() => history.push('/stock/countingStock')}>
              <MDBCardImage
                className="img-fluid d-flex justify-content-center"
                src="https://uppic.cc/d/9vOtr_EuhpJRMurA4UXvp" />
              <div class="d-flex justify-content-center">
                <MDBCardTitle>Counting Stock</MDBCardTitle>
              </div>

            </MDBCard>

            <MDBCard className="paper" style={{ width: "18rem", margin: "1.2rem", borderRadius: "8%" }} onClick={() => history.push('/stock/editStock')}>
              <MDBCardImage
                className="img-fluid d-flex justify-content-center"
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

export default Dashboard;
