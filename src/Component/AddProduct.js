import React, { Component } from 'react'
import history from '../history'
import { Base64 } from 'js-base64';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import firestore from "../firebase/firestore"
import storage from '../firebase/storage'

import { connect } from 'react-redux';

import { addProduct } from '../actions/productAction'

import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: null,
            department: 'Select Department',
            departmentID: null,
            firstnameTH: null,
            lastnameTH: null,
            firstnameEN: null,
            lastnameEN: null,
            idCard: null,
            birthDate: null,
            tel: null,
            email: null,
            address: null,
            user: this.props.userList[this.props.userList.length - 1],
            pic: null,
        };
    }

    onAdd = () => {
        if (this.state.pic !== null) {
            storage.uploadProductPic(this.state.pic, this.state.email, this.uploadSuccess, this.uploadReject)
        } else {
            alert("Please select a product image")
        }
    }

    addSuccess = (doc) => {
        console.log(doc.id)
        history.push('/ordering/orderingChart')
    }

    addReject = (error) => {
        console.log(error)
    }

    uploadSuccess = (uri) => {
        console.log(uri)
        this.setState({ pic: uri })
        const user = {
            employeeID: this.state.employeeID,
            department: this.state.department,
            departmentID: this.state.departmentID,
            firstnameTH: this.state.firstnameTH,
            lastnameTH: this.state.lastnameTH,
            firstnameEN: this.state.firstnameEN,
            lastnameEN: this.state.lastnameEN,
            idCard: this.state.idCard,
            birthDate: this.state.birthDate,
            tel: this.state.tel,
            email: this.state.email,
            address: this.state.address,
            pass: Base64.encode(this.state.email),
            pic: uri
        }
        firestore.addUser(user, this.addSuccess, this.addReject)
        this.props.addAccount(user)

    }

    uploadReject = (error) => {
        console.log(error)
    }

    onImageChange = (event) => {
        if (this.state.email === null || this.state.email === '') {
            alert("Please input Email before select a profile image")
        } else {
            if (event.target.files && event.target.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.setState({ pic: e.target.result });
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    }


    render() {
        return (
            <div className="bg">
                <Paper className="paperAddProduct">
                    <Paper className="paperPhotoPD" >
                        <div style={{ alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                            <img style={{ width: '230px', height: '230px', alignSelf: 'center' }} src={this.state.pic} />
                            <input type="file" onChange={this.onImageChange} style={{ width: '105px', alignSelf: 'center' }} />
                        </div>
                    </Paper>
                </Paper>

                <Hamburger page='ADD NEW PRODUCT' user={this.state.user} />

            </div>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProduct(product)),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productList: state.productReducer.productList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
