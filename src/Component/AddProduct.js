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
            productID: null,
            type: null,
            productName: null,
            price: null,
            unit: null,
            date: null,
            shelf: null,
            level: null,
            product: this.props.productList[this.props.productList.length - 1],
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
        const product = {
            productID: this.state.productID,
            type: this.state.type,
            productName: this.state.productName,
            price: this.state.price,
            unit: this.state.unit,
            date: this.state.date,
            shelf: this.state.shelf,
            level: this.state.shelf,
            pic: uri
        }
        firestore.addProduct(product, this.addSuccess, this.addReject)
        this.props.addProduct(product)

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
                    <p className="fontAddPD" style={{ top: '20%' }}>Product ID</p>
                    <input className="inputPD1" style={{ top: '21%' }} onChange={txt => this.setState({ productID: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '30%' }}>Type</p>
                    <input className="inputPD1" style={{ top: '31%' }} onChange={txt => this.setState({ type: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '40%' }}>Product Name</p>
                    <input className="inputPD1" style={{ top: '41%' }} onChange={txt => this.setState({ productName: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '50%' }}>Price/Unit</p>
                    <input className="inputPD2" style={{ top: '51%', left: '60%' }} onChange={txt => this.setState({ price: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '50%', left: '75.9%' }}>/</p>
                    <input className="inputPD2" style={{ top: '51%', left: '78.47%' }} onChange={txt => this.setState({ unit: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '60%' }}>Date</p>
                    <input className="inputPD1" style={{ top: '61%' }} onChange={txt => this.setState({ date: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '70%' }}>Shelf Location</p>
                    <input className="inputPD3" style={{ top: '71%', left: '60%'}} onChange={txt => this.setState({ shelf: txt.target.value })}></input>
                    <p className="fontAddPD" style={{ top: '70%',left:'74%',width:'96px' }}>Level</p>
                    <input className="inputPD3" style={{ top: '71%', left: '82%'}} onChange={txt => this.setState({ level: txt.target.value })}></input>
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
