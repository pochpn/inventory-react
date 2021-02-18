import React, { Component } from 'react'
import history from '../history'

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password: null,
    };
  }

  pop = () => {
    alert("Email has been send please check your mail box!");
  }

  render() {
    return (
        <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
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
                <button onClick={() => history.push('/')}>
                  Cancel
                </button>
                <button onClick={this.pop}>
                  Send
                </button>
            </div>
      </div>
    )
  }
}

export default ForgetPassword;