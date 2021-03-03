import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'

import { connect } from 'react-redux';
import { purple } from '@material-ui/core/colors';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';


class ViewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Hamburger page='VIEW STOCK' user={this.state.user} />
                <div className="paper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Shelf ID</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%" }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Product ID</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%" }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Product Name</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <img
                        style={{justifyContent:'flex-end',width:"10%"}}
                        src="https://uppic.cc/d/s5ASX7gEVKHDeKH_612-x" />

                </div>
                <div style={{ display: 'flex', alignItems: 'center', height: "10%" }}>
                    <a1 style={{ fontSize: 36, fontWeight: 'bold', marginLeft: "5%" }}>Please select stock</a1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: "1.5%", paddingLeft: "10%" }}>

                    <div>
                        <MDBRow>
                            <MDBCard className="paper" style={{ width: "18rem", height: "18rem", margin: "1.2rem", borderRadius: "8%", alignItems: 'center' }} onClick={() => history.push('/stock/')}>
                                <img
                                    
                                    style={{ width: '70%', alignSelf: 'center' }}
                                    src="https://sv1.picz.in.th/images/2021/03/02/opFg5Q.png" />
                                <div class="d-flex justify-content-center">
                                    <MDBCardTitle
                                        className="fontt">
                                        S1-01</MDBCardTitle>
                                </div>
                            </MDBCard>

                            <MDBCard className="paper" style={{ width: "18rem", height: "18rem", margin: "1.2rem", borderRadius: "8%" }} onClick={() => history.push('/stock/countingStock')}>
                                <img
                                    style={{ width: '70%', alignSelf: 'center' }}
                                    alt="Responsive image"
                                    src="https://sv1.picz.in.th/images/2021/03/02/opFg5Q.png" />
                                <div class="d-flex justify-content-center">
                                    <MDBCardTitle className="fontt">S1-02</MDBCardTitle>
                                </div>

                            </MDBCard>
                        </MDBRow>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);
