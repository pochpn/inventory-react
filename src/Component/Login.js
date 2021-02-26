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
    componentDidMount() {
        auth.listeningCurrentUser(this.listeningUser);
    }

    listeningUser = (user) => {
        console.log(user);
        if (user !== null) {
            firestore.getUser(user.email, this.getSuccess, this.getReject)
            history.push("/home")
        }
    };

    onReject = (error) => {
        console.log(error);
    };

    onLogin = () => {
        auth.signIn(this.state.email, this.state.pass, this.onReject);
    };

    onSignOutSuccess = () => {
        console.log('Sign Out Success');
    };

    onLogout = () => {
        auth.signOut(this.onSignOutSuccess, this.onReject);
    };
    onGetUser = () => {
        const user = {
            email: this.state.email,
            pass: this.state.pass
        }
        firestore.getUser(user.email, this.getSuccess, this.getReject)
    }
    getSuccess = (querySnapshot) => {
        querySnapshot.forEach(doc => {
            this.setState({ account: doc.data() })
            console.log(doc.data())
        });
        console.log(this.state.account)
    }
    getReject = (error) => {
        alert("Email or password is incorrect")
    }
    onAdd = () => {
        const user = {
            email: this.state.email,
            pass: this.state.pass
        }
        firestore.addUser(user, this.success, this.reject)
    }
    success = (docRef) => {
        console.log("Success " + docRef.id)
    }
    reject = (err) => {
        console.log(err)
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

export default Login;
