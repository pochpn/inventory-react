import React, { Component } from 'react'
import history from '../history'

class Registration extends Component {
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
                <h1>Registration</h1>
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
                <button onClick={() => history.push('/')}>
                    Registration
                </button>
            </div>
      </div>
    )
  }
}

export default Registration;
