import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'

import firestore from '../firebase/firestore'
import { search, shelf } from '../pic' 

import { addAccount, clearAccount } from '../actions/accountAction'
import { connect } from 'react-redux';

class Shelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            shelf: this.props.location.state.shelf,
            productList: null,
        };
    }

    componentDidMount() {
        /*firestore.getProductByShelf(this.state.shelf, this.getSuccess, this.getReject)*/
        /*let products = []
        products = this.props.productsList.filter((item) => item.shelf === this.state.shelf)
        this.setState({productList: products})*/
    }

    getSuccess = (querySnapshot) => {
        let products = []
        querySnapshot.forEach(doc => {
            let product = doc.data()
            product.id = doc.id
            console.log(product)
            products = products.concat(product)
        });
        console.log(products)
        this.setState({ productList: products })
        console.log(this.state.producsList)
    }

    getReject = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div className="bg">
                <Hamburger page={this.state.shelf} user={this.state.user} />
                <div className="paper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Product ID</a1>
                        <input name="productID" type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%", justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'  }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Product Name</a1>
                        <input name="productName" type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <img
                        style={{ justifyContent: 'flex-end', width: "10%",marginLeft:'15%'}}
                        src={search} />

                </div>
                <div className="paperTopProduct" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',height: '9%',borderRadius:'25px'}}>
                    <p className='txtProTopShelf' style={{}}>Product</p>
                    <p className='txtProTopShelf' style={{}}>Product ID</p>
                    <p className='txtProTopShelf' style={{}}>Product Name</p>
                    <p className='txtProTopShelf' style={{}}>Type</p>
                    <p className='txtProTopShelf' style={{}}>QTY</p>
                    <p className='txtProTopShelf' style={{}}>UNIT</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {this.props.productList.map((item) => {
                        if (item.shelf === this.state.shelf) {
                            return (
                                <scroll className="paperProduct" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',borderRadius:'30px',width:'97%'}}>
                                    <p className='txtProShelf' style={{}}>{item.pic}</p>
                                    <p className='txtProShelf' style={{}}>{item.productID}</p>
                                    <p className='txtProShelf' style={{}}>{item.productName}</p>
                                    <p className='txtProShelf' style={{}}>{item.type}</p>
                                    <p className='txtProShelf' style={{}}>{item.oty}</p>
                                    <p className='txtProShelf' style={{}}>{item.unit}</p>
                                </scroll>
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
        addAccount: (account) => dispatch(addAccount(account)),
        clearAccount: () => dispatch(clearAccount()),
    };
};

const mapStateToProps = (state) => {
    return {
        accountList: state.accountReducer.accountList,
        userList: state.userReducer.userList,
        productList: state.productReducer.productList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
