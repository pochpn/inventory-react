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
        accountList: state.accountReducer.accountList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConReceiving);
