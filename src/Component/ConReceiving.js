import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { returnor, recvOr, packor } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

const Font = styled.div`
  && {
    color: #000000;
    font-size: 36px;
    width: 250px;
    font-weight: lighter;
  }
`

const Font2 = styled.div`
  && {
    color: #000000;
    font-size: 36px;
    font-weight: bold;
  }
`

const Font3 = styled.div`
  && {
    color: #000000;
    font-size: 48px;
    font-weight: bold;
  }
`


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
                <Paper className='OrConTopic' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Font3>Receiving Order</Font3>
                    </div>
                </Paper>

                <Paper className='OrConTable' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Font2>PO No.</Font2>
                        <Font2>Date</Font2>
                        <Font2>Contact Name</Font2>
                        <Font2>Tel.</Font2>
                    </div>
                </Paper>
                <Hamburger page='RECEIVING ORDER' user={this.state.user} />
                <div style={{ paddingTop: 150 }}>
                    {this.props.billList.map((item) => {
                        if (item.managerConfirm && !item.confirm) {
                            return (
                                <div style={{paddingTop: 100}} onClick={() => this.onCheck(item)}>
                                    <Paper className='paperRcvOd' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <Font>{item.info.reNum}</Font>
                                            <Font>{item.info.date}</Font>
                                            <Font>{item.info.contactName}</Font>
                                            <Font>{item.info.telCon}</Font>
                                        </div>
                                    </Paper>
                                </div>
                            );
                        }
                    })}
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
        accountList: state.accountReducer.accountList,
        billList: state.billReducer.billList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConReceiving);
