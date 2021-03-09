import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { search,Waiting,Suc,Reject } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

class ShippingConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Paper className='conShipTop'>
                    <p className='txtShipTop1'>MR No.</p>
                    <p className='txtShipTop2'>Duration Date</p>
                    <img img className="imschShip" src={search} />
                    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 80 }}>
                        <div style={{ paddingLeft: 150 }}>
                            <input type='text' style={{ fontSize: 20 }} />
                        </div>
                        <div style={{ paddingLeft: 70 }}>
                            <input type='text' style={{ fontSize: 20 }} />
                        </div>
                        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <p style={{ fontSize: 20 }}>-</p>
                        </div>
                        <div>
                            <input type='text' style={{ fontSize: 20 }} />
                        </div>
                    </div>
                </Paper>
                <Paper className='StatusShip'>
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <img img className="imShipSuc" src={Suc} />
                    <p style={{fontSize:24 ,paddingLeft:85,paddingTop:20}}>Success</p>
                    <img img className="imShipWait" src={Waiting} />
                    <p style={{fontSize:24,paddingLeft:75,paddingTop:20}}>Waiting</p>
                    <img img className="imShipRej" src={Reject} />
                    <p style={{fontSize:24,paddingLeft:75,paddingTop:20}}>Reject</p>
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
