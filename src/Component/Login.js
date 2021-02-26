import React, { Component } from 'react'
import history from '../history'
import './Style.css'
import firestore from "../firebase/firestore"
import auth from "../firebase/Auth"

import { connect } from 'react-redux';
import { addUser } from '../actions/userAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
            account: null,
        };
    }

    /*componentDidMount() {
        auth.listeningCurrentUser(this.listeningUser);
    }*/

    /*listeningUser = (user) => {
        console.log(user);
        if (user !== null) {
            firestore.getUser(user.email, this.getSuccess, this.getReject)
            history.push("/home")
        }
    };*/

    /*onReject = (error) => {
        console.log(error);
    };*/

    /*onSignOutSuccess = () => {
        console.log('Sign Out Success');
    };*/

    /*onLogout = () => {
        auth.signOut(this.onSignOutSuccess, this.onReject);
    };*/

    onLogin = () => {
        /*auth.signIn(this.state.email, this.state.pass, this.onReject);*/
        
        firestore.getUser(this.state.email, this.getSuccess, this.getReject)
    };

    getSuccess = (querySnapshot) => {
        let user;
        querySnapshot.forEach(doc => {
            user = doc.data()
            user.id = doc.id
            this.setState({user: user})
        });
        /*console.log(user.pass)
        console.log(this.state.user.pass)*/
        if(user.pass === this.state.user.pass){
            this.props.addUser(user)
            console.log(this.props.userList)
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
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 50, paddingTop: 300 }}>
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <a1>Sign in your account</a1>
                    </div>
                    <div>
                        <a1>Email </a1>
                        <input type="text" name="email" onChange={txt => this.setState({ email: txt.target.value })} />
                    </div>
                    <div>
                        <a1>Password </a1>
                        <input type="password" name="pass" onChange={txt => this.setState({ pass: txt.target.value })} />
                    </div>
                    <div>
                        <button onClick={this.onLogin}>
                            Login
                        </button>
                    </div>
                    <div>
                        <button onClick={() => history.push('/forgetPassword')}>
                            Forget password ?
                </button>
                    </div>

                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
