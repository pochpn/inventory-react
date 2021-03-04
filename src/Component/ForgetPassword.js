import React, { Component } from 'react'
import history from '../history'
import emailjs from 'emailjs-com';
import Paper from '@material-ui/core/Paper';
import firebase from '../firebase/firestore'
import styled, { css } from 'styled-components'

const ButtonSend = styled.button`
  background: #ef3f3e;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1.75em;
  `
const ButtonCancel = styled.button`
  background: #868181;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1.5em;
  `
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
        email: user.email,
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
        <Paper className="paperForget">
          <form className="forget_Pass">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingTop: 32 }}>
              <div>
                <h1>Account Recover</h1>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 32}} >
                <p>Please enter your email for </p>
                <p>receive password</p>
              </div>
              <div style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 130 , }}>
                <input type="text"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={txt => this.setState({ email: txt.target.value })} style={{ fontSize: 24,}} />
                <input type="hidden"
                  id="name"
                  name="name"
                  value={this.state.firstnameEN} />
                <input type="hidden"
                  id="pass"
                  name="pass"
                  value={this.state.pass} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ paddingLeft: 20, paddingTop: 195 }}>
                <ButtonCancel style={{ width: 100 }} onClick={() => history.push('/')}>
                  Cancel
                </ButtonCancel>
              </div>
              <div style={{ paddingLeft: 305, paddingTop: 195 }}>
                <ButtonSend style={{ width: 100 }} onClick={this.onSend}>
                  Send
                </ButtonSend>
              </div>
            </div>

          </form>
        </Paper>
      </div>

    )
  }
}

export default ForgetPassword;