import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { search, Waiting, Suc, Reject } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ShippingConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Startdate: new Date(),
            Enddate: new Date(),
            email: null,
            pass: null,
            user: this.props.userList[this.props.userList.length - 1],
        };
    }


    onChangeStart = Startdate => {
        this.setState({ Startdate: Startdate })
    }

    onChangeEnd = Enddate => {
        this.setState({ Enddate: Enddate })
    }


    render() {
        return (
            <div className="bg">
                <Paper className='conShipTop' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
                        <a1 style={{ fontSize: 26, fontWeight: 'lighter' }}>MR No.</a1>
                        <input type="text" style={{ width: 200, fontSize: 18, borderWidth: 0 }}></input>
                    </div>
                    <div style={{ paddingLeft: 50, display: 'flex', flexDirection: 'column' }}>
                        <a1 style={{ fontSize: 26, fontWeight: 'lighter' }}>Duration Date</a1>
                        <DatePicker style={{ width: "100%" }} selected={this.state.Startdate} onChange={this.onChangeStart} dateFormat='dd/MM/yyy' />
                    </div>
                    <div style={{ paddingLeft: 30, paddingTop: 30, display: 'flex', flexDirection: 'column' }}>
                        <a1 style={{ fontSize: 26, fontWeight: 'lighter', paddingTop: 10 }}> - </a1>
                    </div>
                    <div style={{ paddingLeft: 30, paddingTop: 37, display: 'flex', flexDirection: 'column' }}>
                        <DatePicker style={{ width: "100%" }} selected={this.state.Enddate} onChange={this.onChangeEnd} dateFormat='dd/MM/yyy' />
                    </div>
                    <img
                        style={{ width: "10%", paddingTop: 15 }}
                        src={search}
                        onClick={this.onSearch}></img>
                </Paper>
                <Paper className='StatusShip'>
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                        <img img className="imShipSuc" src={Suc} />
                        <p style={{ fontSize: 24, paddingLeft: 85, paddingTop: 20 }}>Success</p>
                        <img img className="imShipWait" src={Waiting} />
                        <p style={{ fontSize: 24, paddingLeft: 75, paddingTop: 20 }}>Waiting</p>
                        <img img className="imShipRej" src={Reject} />
                        <p style={{ fontSize: 24, paddingLeft: 75, paddingTop: 20 }}>Reject</p>
                    </div>
                </Paper>
                <Hamburger page='CONFIRMING SHIPPING' user={this.state.user} />

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

export default connect(mapStateToProps, mapDispatchToProps)(ShippingConfirm);

