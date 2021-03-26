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


class billPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            notificationHead: 'ยืนยันคำร้องการจ่าย',
            // info: this.props.location.state.info,
        };
    }

    success = (doc) => {
        console.log(doc.id)
        history.push('/home')
    }

    reject = (error) => {
        console.log(error)
    }

    onSend = async () => {
        const notification = {
            notificationHead: this.state.notificationHead,
        }
        await firestore.addNotification(notification, this.success, this.reject)
        this.props.addNotification(notification)
    }


    render() {
        return (
            <div>
                <Paper className="printBill">
                    <ComponentToPrint ref={el => (this.componentRef = el)} info={this.state.info}/>
                    {/* <ReactToPrint content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) => (
                                <Paper className="btnSend" onClick={handlePrint}>
                                    <p className="txtbtnSend">Send</p>
                                </Paper>
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint> */}
                    <Paper className="btnSend" onClick={this.onSend}>
                        <p className="txtbtnSend">Send</p>
                    </Paper>
                    <Paper className="btnCancel" onClick={() => history.push('/ordering')}>
                        <p className="txtbtnCancle">Cancel</p>
                    </Paper>
                    <Paper className="btnEdit" onClick={() => history.push({
                        pathname: '/Ordering/orderingChart',
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

        addNotification: (notification) => dispatch(addNotification(notification))
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
