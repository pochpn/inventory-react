import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { addNotification } from '../actions/notificationAction'
import firestore from '../firebase/firestore'

import ComponentToPrint from './BillP.js';
import { clearPickOrder } from '../actions/pickOrderAction'
import { addBill } from '../actions/billAction'

class billPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            notificationHead: 'ยืนยันคำร้องการจ่าย',
            info: this.props.location.state.info,
            order: this.props.location.state.order,
        };
    }

    success = (doc) => {
        console.log(doc.id)
    }

    reject = (error) => {
        console.log(error)
    }

    addBillSuccess = (doc) => {
        console.log(doc.id)
        let bill = {
            info: this.state.info,
            order: this.state.order,
            managerConfirm: true,
            confirm: false,
            readStatus: false,
            id: doc.id,
            type: 'MR',
        }
        this.props.addBill(bill)
        this.props.clearPickOrder()
        history.push('/home')
    }

    onSend = async () => {
        const notification = {
            notificationHead: this.state.notificationHead,
        }
        await firestore.addNotification(notification, this.success, this.reject)
        this.props.addNotification(notification)
        const bill = {
            info: this.state.info,
            order: this.state.order,
            managerConfirm: true,
            confirm: false,
            readStatus: false,
            type: 'MR',
        }
        firestore.addBill(bill, this.addBillSuccess, this.reject)
    }


    render() {
        return (
            <div>
                <Paper className="printBill">
                    <ComponentToPrint info={this.state.info} order={this.state.order} />
                    <Paper className="btnSend" onClick={this.onSend}>
                        <p className="txtbtnSend">Send</p>
                    </Paper>
                    <Paper className="btnCancel" onClick={() => {
                        this.props.clearPickOrder()
                        history.push('/home')
                    }}>
                        <p className="txtbtnCancle">Cancel</p>
                    </Paper>
                    <Paper className="btnEdit" onClick={() => history.push({
                        pathname: '/picking/pickingChart',
                        state: { info: this.state.info },
                    })}>
                        <p className="txtbtnEdit">Edit</p>
                    </Paper>
                </Paper>

            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        clearPickOrder: () => dispatch(clearPickOrder()),
        addNotification: (notification) => dispatch(addNotification(notification)),
        addBill: (bill) => dispatch(addBill(bill))
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productProfile: state.productProfileReducer.productProfileList,
        notificationList: state.notificationReducer.notificationList,
        pickOrderList: state.pickOrderReducer.pickOrderList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(billPick);
