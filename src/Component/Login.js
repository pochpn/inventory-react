import React, { Component } from 'react'
import history from '../history'
import './Style.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
        };
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
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <a1>Password </a1>
                        <input type="text" name="pass" />
                    </div>
                    <div>
                        <button onClick={() => history.push('/home')}>
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
