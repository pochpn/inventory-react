import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

import { connect } from 'react-redux';
import { addUser, clearUser } from '../actions/userAction';
import { clearAccount } from '../actions/accountAction'

import { cost, dashboard, historyPic, orderconfirm, ordering, packing, standcount, confirmship,xxx } from '../pic'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    onLogout = () => {
        this.props.clearAccount()
        this.props.clearUser()
        console.log(this.state.user)
        history.push('/')
    }

    render() {
        return (
            <div className="bg">
                <Topbar page='HOME' user={this.state.user.firstnameEN} />
                    <MDBRow >
                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => {
                            if (this.state.user.departmentID === 7) {
                                history.push('/dashboard')
                            }
                        }}>
                            <MDBCardImage
                                className="img-fluid"
                                src={dashboard} waves />
                            <MDBCardBody>
                                <MDBCardTitle>DASHBOARD</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/stock')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={standcount} waves />
                            <MDBCardBody>
                                <MDBCardTitle>STOCK & COUNTING</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/ordering')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={ordering} waves />
                            <MDBCardBody>
                                <MDBCardTitle>ORDERING</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/picking')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={packing} waves />
                            <MDBCardBody>
                                <MDBCardTitle>PICKING</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/inventoryCost')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={cost} waves />
                            <MDBCardBody>
                                <MDBCardTitle>INVENTORY COST</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/orderConfirm')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={orderconfirm} waves />
                            <MDBCardBody>
                                <MDBCardTitle>ORDER CONFIRMATION</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/shippingConfirm')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={confirmship} waves />
                            <MDBCardBody>
                                <MDBCardTitle>CONFIRMING SHIPPING</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/history')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={historyPic} waves />
                            <MDBCardBody>
                                <MDBCardTitle>HISTORY</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/memberManage')}>
                            <MDBCardImage
                                className="img-fluid"
                                src={xxx} waves />
                            <MDBCardBody>
                                <MDBCardTitle>MEMBER</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="paper" style={{ width: "22rem" }} onClick={this.onLogout}>
                            <MDBCardImage
                                className="img-fluid"
                                src={xxx} waves />
                            <MDBCardBody>
                                <MDBCardTitle>LOGOUT</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBRow>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
        clearAccount: () => dispatch(clearAccount()),
        clearUser: () => dispatch(clearUser()),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
