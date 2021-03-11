import React, { Component } from 'react'
import history from '../history'
import { Base64 } from 'js-base64';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import firestore from "../firebase/firestore"
import storage from '../firebase/storage'

import { connect } from 'react-redux';

import { addProductProfile } from '../actions/productProfileAction'

import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productID: null,
            type: null,
            productName: null,
            unit: null,
            shelf: null,
            user: this.props.userList[this.props.userList.length - 1],
            pic: null,
        };
    }

    onAdd = () => {
        if (this.state.pic !== null && this.state.picName !== null) {
            storage.uploadProductPic(this.state.pic, this.state.productID, this.uploadSuccess, this.uploadReject)
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
        const product = {
            productID: this.state.productID,
            type: this.state.type,
            productName: this.state.productName,
            unit: this.state.unit,
            shelf: this.state.shelf,
            pic: uri,
        }
        firestore.addProductProfile(product, this.addSuccess, this.addReject)
        this.props.addProductProfile(product)

    }

    uploadReject = (error) => {
        console.log(error)
    }

    onImageChange = (event) => {

        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ pic: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
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
                    <p className="fontAddPD" style={{ top: '20%' }}>Product ID</p>
                    <input className="inputPD1" style={{ top: '21%' }} onChange={txt => this.setState({ productID: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '30%' }}>Type</p>
                    <input className="inputPD1" style={{ top: '31%' }} onChange={txt => this.setState({ type: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '40%' }}>Product Name</p>
                    <input className="inputPD1" style={{ top: '41%' }} onChange={txt => this.setState({ productName: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '60%' }}>Shelf Location</p>
                    <input className="inputPD1" style={{ top: '61%' }} onChange={txt => this.setState({ shelf: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '70%' }}>Unit</p>
                    <input className="inputPD3" style={{ top: '71%', left: '60%' }} onChange={txt => this.setState({ unit: txt.target.value })}></input>
                    <button className="btCcAnp" onClick={() => history.push('/ordering/orderingChart')}>Cancel</button>
                    <button className="btAddAnp" onClick={this.onAdd}>Add</button>
                </Paper>

                <Hamburger page='ADD NEW PRODUCT' user={this.state.user} />

            </div>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductProfile: (product) => dispatch(addProductProfile(product)),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productList: state.productReducer.productList,
        productProfile: state.productProfileReducer.productProfile,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
