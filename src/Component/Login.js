import React, { Component } from 'react'

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
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <a1>Sign in your account</a1>
            </div>
            <div>
                <a1>Email </a1>
                <input type="text" name="name" />
            </div>
            <div>
                <a1>Password </a1>
                <input type="text" name="name" />
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
            <div>
                <button>
                    Registration
                </button>
            </div>

      </div>
    )
  }
}

export default Login;
