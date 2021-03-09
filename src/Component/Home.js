import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

import { connect } from 'react-redux';
import { addUser, clearUser } from '../actions/userAction';
import { clearAccount } from '../actions/accountAction'

import { cost, dashboard, historyPic, orderconfirm, ordering, packing, standcount, confirmship, xxx } from '../pic'


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
            <div className="bg" >
                <Paper className="paperDash" onClick={() => history.push('/dashboard')}>
                    <div>
                        <img className="imDash" src={dashboard} />
                        <p className="textDb">DASHBOARD</p>
                    </div>

                </Paper>
                <Paper className="paperSt" onClick={() => history.push('/stock')}>
                    <div>
                        <img className="imSt" src={standcount} />
                        <p className="textSt" >
                            STOCK & COUNTING
                        </p>
                    </div>
                </Paper>
                <Paper className="paperIv" onClick={() => history.push('/inventoryCost')} >
                    <div>
                        <img className="imIc" src={cost} />
                        <p className="textIc">INVENTORY
                        COST</p>
                    </div>
                </Paper>
                <Paper className="paperOd" onClick={() => history.push('/ordering')} >
                    <div>
                        <img className="imOd" src={ordering} />
                        <p className="textOd">ORDERING</p>
                    </div>
                </Paper>
                <Paper className="paperPk" onClick={() => history.push('/picking')} >
                    <div>
                        <img className="imPk" src={packing} />
                        <p className="textOd">PICKING</p>
                    </div>
                </Paper>
                <Paper className="paperOc" onClick={() => history.push('/orderConfirm')} >
                    <div>
                        <img className="imOc" src={orderconfirm} />
                        <p className="textO">ORDER</p>
                        <p className="textS">CONFIRMATION</p>
                    </div>
                </Paper>
                <Paper className="paperCs" onClick={() => history.push('/confirmShipping')} >
                    <div>
                        <img className="imCs" src={confirmship} />
                        <p className="textCf">CONFIRMING</p>
                        <p className="textSh">SHIPPING</p>
                    </div>
                </Paper>
                <Paper className="paperHs" onClick={() => history.push('/history')} >
                    <div>
                        <img className="imHs" src={historyPic} />
                        <p className="textHs">HISTORY</p>

                    </div>
                </Paper>
                <Hamburger page='HOME' user={this.state.user} />
            </div >

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
