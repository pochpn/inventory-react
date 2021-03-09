import React, { Component } from 'react'
import history from '../history'
import './Style.css'
import firestore from "../firebase/firestore"

import Button from 'react-bootstrap/Button';
import styled, { css } from 'styled-components'
import Paper from '@material-ui/core/Paper';
import { BsPeopleFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { Base64 } from 'js-base64';
import { connect } from 'react-redux';
import { addUser } from '../actions/userAction';
import { addAccount } from '../actions/accountAction'
import { addProduct } from '../actions/productAction';

const ButtonLogin = styled.button`
  background: #ef3f3e;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 3em;
`
const FontLogin = styled.div`
  && {
    color: #EF3F3E;
    font-size: 3em;
  }
`
const Font = styled.div`
  && {
    color: #000000;
    font-size: 1em;
    font-weight: semibold;
  }
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
            account: null,
            user: this.props.userList[this.props.userList.length - 1],
            accounts: null,
        };
    }

    onLogin = () => {
        firestore.getUser(this.state.email, this.getSuccess, this.getReject)
    };

    getAllSuccess = (querySnapshot) => {
        querySnapshot.forEach(doc => {
            let account = doc.data()
            account.id = doc.id
            /*console.log(account)*/
            this.props.addAccount(account)
        });
        /*console.log(this.props.accountList)*/
    }

    getAllReject = (error) => {
        console.log(error)
    }

    getAllProductSuccess = (querySnapshot) => {
        querySnapshot.forEach(doc => {
            let product = doc.data()
            product.id = doc.id
            console.log(product)
            this.props.addProduct(product)
        });
        console.log(this.props.productList)
    }

    getSuccess = (querySnapshot) => {
        let user;
        querySnapshot.forEach(doc => {
            user = doc.data()
            user.id = doc.id
            this.setState({ user: user })
        });
        /*console.log(user.pass)
        console.log(this.state.user.pass)*/
        if (Base64.decode(user.pass) === this.state.pass) {
            this.props.addUser(user)
            /*console.log(this.props.userList)*/
            firestore.getAllUser(this.getAllSuccess, this.getAllReject)
            firestore.getAllProduct(this.getAllProductSuccess, this.getAllReject)
            history.push("/home")
            /*window.location.href="/home"*/
        } else {
            alert("Email or Password is incorrect")
        }
        /*console.log(this.state.account)*/
    }

    getReject = (error) => {
        console.log(error)
        alert("Email or Password is incorrect")
    }

    addProduct = () => {
        const product = {
            costPunit: '4590',
            expDate: '-',
            expTime: '-',
            level: '1',
            oty: '50',
            pic: 'PIC',
            productID: '15201A',
            productName: 'Crocodile Leather',
            recvDate: '20/01/21',
            recvTime: '15:30',
            shelf: 'S1-01',
            type: 'A',
            unit: 'EA',
        }
        firestore.addProduct(product, this.addSuccess, this.addReject)
    }

    addSuccess = (doc) => {
        console.log(doc.id)
    }

    addReject = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div className="bgLogin">
                <div style={{ paddingLeft: 1390, paddingTop: 350 }}>
                    <Paper className="paper" style={{ backgroundColor: 'white', width: 316, height: 398, borderRadius: 20}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ paddingLeft: 105 }}>
                                <FontLogin>Login</FontLogin>
                            </div>
                            <div style={{ paddingLeft: 85 }}>
                                <Font>Sign in your account</Font>
                            </div>
                            <div style={{ paddingLeft: 35, paddingTop: 20 }}>
                                <Font><BsPeopleFill /> Email </Font>
                            </div>
                            <div style={{ paddingLeft: 35, paddingTop: 5 }}>
                                <input style={{ width: 250 }} type="text" name="email" onChange={txt => this.setState({ email: txt.target.value })} />
                            </div>
                            <div style={{ paddingLeft: 35, paddingTop: 10 }}>
                                <Font><FaKey /> Password </Font>
                            </div>
                            <div style={{ paddingLeft: 35, paddingTop: 5 }}>
                                <input style={{ width: 250 }} type="password" name="pass" onChange={txt => this.setState({ pass: txt.target.value })} />
                            </div>
                            <div style={{ paddingLeft: 20, paddingTop: 25 }}>
                                <ButtonLogin style={{ width: 250 }} onClick={this.onLogin/*this.addProduct*/}>
                                    Login
                                </ButtonLogin>
                            </div>
                            <div style={{ paddingLeft: 82, paddingTop: 10 }}>
                                <Button variant="link" onClick={() => history.push({
                                    pathname: '/forgetPassword',
                                })}>
                                    Forget password ?
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
        addAccount: (account) => dispatch(addAccount(account)),
        addProduct: (product) => dispatch(addProduct(product))
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productList: state.productReducer.productList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
