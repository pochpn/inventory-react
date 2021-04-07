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

import BillP from './BillP.js';
import { clearPickOrder } from '../actions/pickOrderAction'
import { addBill } from '../actions/billAction'

import { deleteProduct, editProduct } from '../actions/productAction'

class BillPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            notificationHead: 'ยืนยันคำร้องการจ่าย',
            info: this.props.location.state.info,
            order: this.props.location.state.order,
            product: {},
        };
    }

    deleteSuccess = () => {
        console.log('Delete Success')
    }

    editSuccess = () => {
        console.log('Edit Success')
    }

    getSuccess = (doc) => {
        this.state.order.forEach((item) => {
            if (item.id == doc.id) {
                if (item.qty === doc.data().qty) {
                    console.log(doc.id)
                    firestore.deleteProduct(doc.id, this.deleteSuccess, this.reject)
                    this.props.deleteProduct(doc.id)
                } else {
                    console.log(doc.id)
                    const product = doc.data()
                    product.id = doc.id
                    product.qty -= item.qty
                    firestore.updateProductByID(product, this.editSuccess, this.reject)
                    this.props.editProduct(product)
                }
            }
        })
    }

    reject = (error) => {
        console.log(error)
    }

    addBillSuccess = (doc) => {
        /*console.log(doc.id)*/
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
        this.state.order.forEach((item) => {
            firestore.getProductByID(item.id, this.getSuccess, this.reject)
        })
        history.push('/home')
    }


    render() {
        return (
            <div>
                <Paper className="printBill">
                    <BillP info={this.state.info} order={this.state.order} />
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
        addBill: (bill) => dispatch(addBill(bill)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        editProduct: (product) => dispatch(editProduct(product))
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
