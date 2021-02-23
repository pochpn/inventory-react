import React, { Component } from 'react'
import history from '../history'
import './Style.css'
import firestore from "../firebase/firestore"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
            account: null,
        };
    }

    onGetUser =() =>{
        const user ={
            email:this.state.email,
            pass:this.state.pass
        }
        firestore.getUser(user.email,this.getSuccess,this.getReject)
    }
    getSuccess= (querySnapshot) =>{
        querySnapshot.forEach(doc => {
            this.setState({account:doc.data()})
        });
        console.log(this.state.account)
        if(this.state.pass===this.state.account.pass)
        {
            console.log("PASS")
            history.push('/home')
        }
    }
    getReject = () => {
        alert("Email or password is incorrect")
    }
    onAdd =() =>{
        const user ={
            email:this.state.email,
            pass:this.state.pass
        }
        firestore.addUser(user,this.success,this.reject)
    }
    success = (docRef) =>{
        console.log("Success " + docRef.id)
    }
    reject =(err) =>{
        console.log(err)
    }
    
    render() {
        return (
            <div className="bgLogin">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end',paddingRight:50,paddingTop:300 }}>
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <a1>Sign in your account</a1>
                    </div>
                    <div>
                        <a1>Email </a1>
                        <input type="text" name="email" onChange={txt=>this.setState({email:txt.target.value})}/>
                    </div>
                    <div>
                        <a1>Password </a1>
                        <input type="password" name="pass" onChange={txt=>this.setState({pass:txt.target.value})} />
                    </div>
                    <div>
                        <button onClick={this.onGetUser}>                       
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

export default Login;
