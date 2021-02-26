import React, { Component } from 'react'
import history from '../history'
import './Style.css'
import firestore from "../firebase/firestore"
import auth from "../firebase/Auth"

import Button from 'react-bootstrap/Button';
import styled, { css } from 'styled-components'
import Paper from '@material-ui/core/Paper';
import { BsPeopleFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

import { connect } from 'react-redux';
import { addUser } from '../actions/userAction';
import { addAccount } from '../actions/accountAction'

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
        };
    }

    onLogin = () => {
        firestore.getUser(this.state.email, this.getSuccess, this.getReject)
    };

    getAllSuccess = (querySnapshot) => {
        querySnapshot.forEach(doc => {
            let account = doc.data()
            account.id = doc.id
            console.log(account)
            this.props.addAccount(account)
        });
        console.log(this.props.accountList)
    }

    getAllReject = (error) => {
        console.log(error)
    }

    getSuccess = (querySnapshot) => {
        let user;
        querySnapshot.forEach(doc => {
            user = doc.data()
            user.id = doc.id
            this.setState({user: user})
        });
        /*console.log(user.pass)
        console.log(this.state.user.pass)*/
        if(user.pass === this.state.pass){
            this.props.addUser(user)
            console.log(this.props.userList)
            firestore.getAllUser(this.getAllSuccess, this.getAllReject)
            history.push("/home")
        } else {
            alert("Email or Password is incorrect")
        }
        /*console.log(this.state.account)*/
    }

    getReject = (error) => {
        console.log(error)
        alert("Email or Password is incorrect")
    }

    render() {
        return (
            <div className="bgLogin">
                <div style={{paddingLeft:1065,paddingTop:160}}>
                    <Paper className="paper" style={{ backgroundColor:'white', width: 316, height: 398 , borderRadius: 20}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style = {{paddingLeft: 105}}>
                                <FontLogin>Login</FontLogin>
                            </div>
                            <div style = {{paddingLeft: 85}}>
                                <Font>Sign in your account</Font>
                            </div>
                            <div style = {{paddingLeft: 35, paddingTop: 20}}>
                                <Font><BsPeopleFill /> Email </Font>
                            </div>
                            <div style = {{paddingLeft: 35, paddingTop: 5}}>
                                <input style = {{width: 250}} type="text" name="email" onChange={txt => this.setState({ email: txt.target.value })} />
                            </div>
                            <div style = {{paddingLeft: 35, paddingTop: 10}}>
                                <Font><FaKey /> Password </Font>
                            </div>
                            <div style = {{paddingLeft: 35, paddingTop: 5}}>
                                <input style = {{width: 250}} type="password" name="pass" onChange={txt => this.setState({ pass: txt.target.value })} />
                            </div>
                            <div style={{ paddingLeft: 20, paddingTop: 25 }}>
                                <ButtonLogin style = {{width: 250}} onClick={this.onLogin}>
                                    Login
                                </ButtonLogin>
                            </div>
                            <div style={{ paddingLeft: 82, paddingTop: 10 }}>
                                <Button variant="link" onClick={() => history.push('/forgetPassword')}>
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
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
