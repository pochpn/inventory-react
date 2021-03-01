import React, { Component } from 'react'
import history from '../history'
import emailjs from 'emailjs-com';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_58nvw9r",
        "template_sfafrso",
        ".forget_Pass",
        "user_GNYzCs6qX14Dws420mU9Z",
      )
      .then()
      .catch();
    this.setState({ email: "", });

    alert("Email has been send please check your mail box!");
  }

  pop = () => {

    require('../TestSendEmail')

    alert("Email has been send please check your mail box!");

  }

  render() {
    return (
      <div className="bg">
        <form onSubmit={this.handleSubmit.bind(this)} className="forget_Pass">

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>Forget Password</h1>
            </div>
            <div>
              <h1>Account Recover</h1>
            </div>
            <div>
              <p>Please enter your email for receive password</p>
            </div>
            <div>
              <input type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={txt => this.setState({ email: txt.target.value })} />
            </div>
            <div>
              <button onClick={() => history.push('/')}>
                Cancel
                </button>
              <input type="submit">
              </input>
            </div>
          </div>

        </form>
      </div>

    )
  }
}

export default ForgetPassword;