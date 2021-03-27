import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { returnor, recvOr, packor } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

class ConReceiving extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    onCheck = (item) => {
        history.push({
            pathname: '/orderConfirm/receiving/billOrder2',
            state: {
                bill: item,
            },
        })
    }

    render() {
        return (
            <div className="bg">
                <Paper className='OrConTopic'>
                    <p className="txtRecvTopic">Receiving Order</p>
                </Paper>
                <Paper className='OrConTable'>
                    <p className="txtOrConTable1">PO No.</p>
                    <p className="txtOrConTable2">Date</p>
                    <p className="txtOrConTable3">Contact Name</p>
                    <p className="txtOrConTable4">Tel.</p>
                </Paper>
                {this.props.billList.map((item) => {
                    if (item.managerConfirm && !item.confirm && (item.type==='PO')) {
                        return (
                            <Paper style={{ display: 'flex', flexDirection: 'row' }} onClick={() => this.onCheck(item)} >
                                <p>{item.info.reNum}|</p>
                                <p>{item.info.date}|</p>
                                <p>{item.info.contactName}|</p>
                                <p>{item.info.telCon}</p>
                            </Paper>)
                    }
                })}
                <Hamburger page='RECEIVING ORDER' user={this.state.user} />

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
        accountList: state.accountReducer.accountList,
        billList: state.billReducer.billList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConReceiving);
