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
        <div>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Member Management</h1>
            </div>
            <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <a1>Employee id </a1>
                    <input type="text" name="email" />
                </div>
                <div>
                    <a1>ID card number</a1>
                    <input type="text" name="email" />
                </div>
                <div>
                    <a1>Firstname</a1>
                    <input type="text" name="email" />
                </div>
                <div>
                    <a1>Lastname</a1>
                    <input type="text" name="email" />
                </div>
                <div>
                    <button>
                        search
                    </button>
                </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <button>
                    Add Menber
                </button>
            </div>
        </div>
    )
  }
}

export default Login;
