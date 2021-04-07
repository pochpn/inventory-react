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

import BillP2 from './BillP2.js';
import { clearPickOrder } from '../actions/pickOrderAction'
import { editBill, deleteBill } from '../actions/billAction'

import { deleteProduct, editProduct } from '../actions/productAction'

class BillPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            notificationHead: 'ยืนยันคำร้องการจ่าย',
            bill: this.props.location.state.bill,
            product: {},
        };
    }

    updateBillSuccess = () => {
        let bill = this.state.bill
        bill.confirm = true
        this.props.editBill(bill)
        console.log('Update Success')
        history.push('/orderConfirm/packing')
    }

    onAccept = () => {
        let bill = this.state.bill
        bill.confirm = true
        firestore.updateBillByID(bill, this.updateBillSuccess, this.reject)
    }

    reject = (error) => {
        console.log(error)
    }

    deleteBillSuccess = () => {
        console.log('Delete Success')
        this.props.deleteBill(this.state.bill.id)
    }

    getSuccess = () => {

    }

    getReject = (error) => {
        console.log(error)
    }

    addSuccess = (doc) => {
        console.log('success')
    }

    addReject = (error) => {
        console.log(error)
    }

    onReject = () => {
        /*firestore.deleteBill(this.state.bill.id, this.deleteBillSuccess, this.reject)*/
        this.state.bill.order.forEach((item) => {
            this.setState({product: item})
            console.log(this.state.product)
            /*firestore.getProductByID(item.id, this.getSuccess, this.getReject)*/
            /*firestore.addProductByID(item, this.addSuccess, this.addReject)*/
        })
    }

    render() {
        return (
            <div>
                <Paper className="printBill">
                    <BillP2 bill={this.state.bill} />
                    <Paper className="btnSend" onClick={this.onAccept}>
                        <p className="txtbtnSend">Accept</p>
                    </Paper>
                    <Paper className="btnCancel" onClick={() => {
                        history.push('/orderConfirm/packing')
                    }}>
                        <p className="txtbtnCancle">Cancel</p>
                    </Paper>
                    <Paper className="btnEdit" onClick={this.onReject}>
                        <p className="txtbtnEdit">Reject</p>
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
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        editProduct: (product) => dispatch(editProduct(product)),
        editBill: (bill) => dispatch(editBill(bill)),
        deleteBill: (id) => dispatch(deleteBill(id)),
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

export default connect(mapStateToProps, mapDispatchToProps)(BillPick);
