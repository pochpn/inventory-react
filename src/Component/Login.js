import React, { Component } from 'react'
import history from '../history'

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
        <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
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
                <button>
                    Login
                </button>
            </div>
            <div>
                <button onClick={() => history.push('/forgetPassword')}>
                    Forget password ?
                </button>
            </div>

      </div>
    )
  }
}

export default Login;
