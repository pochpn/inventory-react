import React, { Component } from 'react'
import history from '../history'
import emailjs from 'emailjs-com';

import firebase from '../firebase/firestore'

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      user: null,
      firstnameEN: null,
      pass: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  success = (querySnapshot) => {
    let user;
    querySnapshot.forEach(doc => {
      user = doc.data()
      user.id = doc.id
      this.setState({
        firstnameEN: user.firstnameEN,
        pass: user.pass,
        email :user.email,
      })
    });
    if (user.email != this.state.email) {
        console.log("error")
    } else {
      this.handleSubmit()
    }
  }

  reject = (error) => {
    console.log(error)
    alert("Email is incorrect!!");
  }

  onSend = (e) => {
    e.preventDefault()
    firebase.getUser(this.state.email, this.success, this.reject)
  }

  handleSubmit = () => {
    emailjs
      .sendForm(
        "service_58nvw9r",
        "template_sfafrso",
        ".forget_Pass",
        "user_GNYzCs6qX14Dws420mU9Z",
      )
      .then(function () {
        console.log('Send')
      })
      .catch(function (error) {
        console.log(error)
      });
    this.setState({
      email: "",
      email: "",
      user: "",
      firstnameEN: "",
      pass: "",

    });
    alert("Email has been send please check your mail box!");
  }

  render() {
    return (
      <div className="bg">
        <form className="forget_Pass">
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
              <input type="hidden"
                id="name"
                name="name"
                value={this.state.firstnameEN} />
              <input type="hidden"
                id="pass"
                name="pass"
                value={this.state.pass} />
            </div>
            <div>
              <button onClick={() => history.push('/')}>
                Cancel
              </button>
              <button onClick={this.onSend}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default ForgetPassword;