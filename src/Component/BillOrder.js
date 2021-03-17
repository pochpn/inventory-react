import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import { ComponentToPrint } from './Bill.js';

class billOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }
    render() {
        return (
            <div>
                <Paper className="printBill">
                    <ComponentToPrint ref={el => (this.componentRef = el)} />
                    <ReactToPrint content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) => (
                                <Paper className="btnSend" onClick={handlePrint}>Send</Paper>
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                    <Paper className="btnCancel" onClick={() => history.push('/ordering')}>Cancel</Paper>
                    <Paper className="btnEdit" onClick={() => history.push('/ordering/orderingChart')}>Edit</Paper>
                </Paper>

            </div>
        );
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
        productProfile: state.productProfileReducer.productProfileList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(billOrder);
