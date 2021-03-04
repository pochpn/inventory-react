import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'

import firestore from '../firebase/firestore'

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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <a1>Employee id </a1>
                        <input type="text" name="employeeid" />
                    </div>
                    <div>
                        <a1>ID card number</a1>
                        <input type="text" name="idcard" />
                    </div>
                    <div>
                        <a1>Firstname</a1>
                        <input type="text" name="fristname" />
                    </div>
                    <div>
                        <a1>Lastname</a1>
                        <input type="text" name="lastname" />
                    </div>
                    <div>
                        <button >
                            search
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button >
                        Add Member
                    </button>
                </div>
                {this.props.productList.map((item) => {
                    if (item.shelf === this.state.shelf) {
                        return (
                            <ul>
                                <li><span>{item.pic}</span></li>
                                <li><span>{item.productID}</span></li>
                                <li><span>{item.productName}</span></li>
                                <li><span>{item.shelf}</span></li>
                                <li><span>------------------------</span></li>
                            </ul>
                        );
                    }

                })}
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
