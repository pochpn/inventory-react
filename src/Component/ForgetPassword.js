import React, { Component } from 'react'

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password: null,
    };
  }

  Pop() {
    alert("Email has been send please check your mail box!");
  }

  render() {
    return (
        <div>
            <div>
                <h1>Account Recover</h1>
            </div>
            <div>
                <p>Please enter your email for receive password</p>
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <button>Cancel</button>
                <button onClick={this.Pop}>Send</button>
            </div>
      </div>
    )
  }
}

export default ForgetPassword;