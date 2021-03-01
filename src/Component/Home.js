import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

import { connect } from 'react-redux';
import { addUser, clearUser } from '../actions/userAction';
import { clearAccount } from '../actions/accountAction'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1]
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
                <Topbar page='HOME' user={this.state.user.firstnameEN}/>

                <MDBRow >

                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => {
                        if(this.state.user.departmentID === 7){
                            history.push('/dashboard')
                        }
                    }}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152217820_1089065974908679_241601647975925158_n.png?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=IJtNLAYA9tcAX-WFH6X&_nc_ht=scontent.fbkk11-1.fna&oh=4f7860b3079b1f06c6a1598d5f23c91f&oe=6056D916" waves />
                        <MDBCardBody>
                            <MDBCardTitle>DASHBOARD</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/stock')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152673494_174302030905201_8288846302498350073_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=TyM37htbVHAAX8jcrZV&_nc_ht=scontent.fbkk11-1.fna&oh=9c564d5b8bcdce96e7c6dcca8a393c16&oe=605866FC" waves />
                        <MDBCardBody>
                            <MDBCardTitle>STOCK & COUNTING</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/ordering')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152975778_531982617775201_8402529669074426884_n.png?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=oha1i82bgckAX99G8AL&_nc_oc=AQnZRCSZFieejrk1LtzQ37NfsTO5sK6EWYyRSNJctBHkgsgisCqREALHrobpA1m_4yY&_nc_ht=scontent.fbkk11-1.fna&oh=166e6bf1f65e656a3ec2fe63321dbc06&oe=6058D33D" waves />
                        <MDBCardBody>
                            <MDBCardTitle>ORDERING</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard  className="paper"style={{ width: "22rem" }} onClick={() => history.push('/picking')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152524885_215082437012148_938549997391706450_n.png?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=cJ7VDDKoAi8AX9m8jGM&_nc_ht=scontent.fbkk11-1.fna&oh=cf3c3089faef82321718778f93636f96&oe=60579369" waves />
                        <MDBCardBody>
                            <MDBCardTitle>PICKING</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/inventoryCost')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152459793_846717072555291_7599984401294676617_n.png?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=9Cw4j0DCj54AX99RUM2&_nc_ht=scontent.fbkk11-1.fna&oh=cdc7a27a9d967dc413de6d8318371da5&oe=6056F3EF" waves />
                        <MDBCardBody>
                            <MDBCardTitle>INVENTORY COST</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard  className="paper" style={{ width: "22rem" }} onClick={() => history.push('/orderConfirm')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152025052_431666274730843_8129194118173421192_n.png?_nc_cat=109&ccb=3&_nc_sid=ae9488&_nc_ohc=vnY89-klLVYAX-P-cR8&_nc_oc=AQl-Lh8hTgejoQAYjR9mGlxVM-ahyYv-92COd_zVJ3UMAoShXfSG9LcJpkp8B-sva5k&_nc_ht=scontent.fbkk11-1.fna&oh=944b986584ac0c11cdbd6d2bc5956b7e&oe=6055AFDB" waves />
                        <MDBCardBody>
                            <MDBCardTitle>ORDER CONFIRMATION</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/shippingConfirm')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152333521_336535544331136_2218887735446908382_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=-hG_iQgIIgsAX8H-iOQ&_nc_ht=scontent.fbkk11-1.fna&oh=9ef73abf259d2fc7f61806f9bf80298b&oe=60588761" waves />
                        <MDBCardBody>
                            <MDBCardTitle>CONFIRMING SHIPPING</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={() => history.push('/history')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152204104_915684012540211_2220597254380171314_n.png?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=nR7BMf4X9zoAX9tJMoT&_nc_ht=scontent.fbkk11-1.fna&oh=938f00560a084f5f6eac48851a8a6ca3&oe=6057C57A" waves />
                        <MDBCardBody>
                            <MDBCardTitle>HISTORY</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard  className="paper" style={{ width: "22rem" }} onClick={() => history.push('/memberManage')}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152204104_915684012540211_2220597254380171314_n.png?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=nR7BMf4X9zoAX9tJMoT&_nc_ht=scontent.fbkk11-1.fna&oh=938f00560a084f5f6eac48851a8a6ca3&oe=6057C57A" waves />
                        <MDBCardBody>
                            <MDBCardTitle>MEMBER</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="paper" style={{ width: "22rem" }} onClick={this.onLogout}>
                        <MDBCardImage
                            className="img-fluid"
                            src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152204104_915684012540211_2220597254380171314_n.png?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=nR7BMf4X9zoAX9tJMoT&_nc_ht=scontent.fbkk11-1.fna&oh=938f00560a084f5f6eac48851a8a6ca3&oe=6057C57A" waves />
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
