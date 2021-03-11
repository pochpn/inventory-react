import React, { Component } from 'react'
import history from '../history'
import emailjs from 'emailjs-com';
import Paper from '@material-ui/core/Paper';
import firebase from '../firebase/firestore'
import styled, { css } from 'styled-components'
import { Base64 } from 'js-base64';
import './Modal.css';
import { Success, Error } from '../pic';

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
const ButtonOK = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`
const FontHead = styled.div`
  && {
    color: #000000;
    font-size: 36px;
  }
`
const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      email: null,
      user: null,
      firstnameEN: null,
      pass: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleModalClose = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-cardforget') {
      return;
    }
    this.setState({ modal: !this.state.modal });
  };

  handleModalOpen = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleModal2Close = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-cardforget') {
      return;
    }
    this.setState({ modal2: !this.state.modal2 });
  };

  handleModal2Open = () => {
    this.setState({ modal2: !this.state.modal2 });
  };

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
        pass: Base64.decode(user.pass),
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
    this.handleModal2Open()
    // alert("Email is incorrect!!");
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
      user: "",
      firstnameEN: "",
      pass: "",

    });
    this.handleModalOpen()
    // alert("Email has been send please check your mail box!");
  }

  render() {
    return (
      <div className="bg">
        <Paper className="paperForget">
          <form className="forget_Pass">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 32 }}>
              <div>
                <FontHead>Account Recover</FontHead>
              </div>
              <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 35 }} >
                <p>Please enter your email for </p>
                <p>receive password</p>
              </Font>
              <div style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 80 }}>
                <input type="text"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={txt => this.setState({ email: txt.target.value })} style={{ fontSize: 24, width: 510 }} />
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
              <div style={{ paddingLeft: 20, paddingTop: 200 }}>
                <ButtonCancel style={{ width: 100 }} onClick={() => history.push('/')}>
                  Cancel
                </ButtonCancel>
              </div>
              <div style={{ paddingLeft: 305, paddingTop: 200 }}>
                <ButtonSend style={{ width: 100 }} onClick={this.onSend}>
                  Send
                </ButtonSend>
              </div>
            </div>
          </form>
        </Paper>
        <div hidden={!this.state.modal}>
          <div className="modal-background">
            <div className="modal-cardforget">
              <div>
                <img className="picSuccess" src={Success} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 130 }} >
                  <p>Email has been sent.</p>
                  <p>Please check your mail box.</p>
                </Font>
              </div>
              <div style={{ paddingLeft: 270, paddingTop: 15 }}>
                <ButtonOK style={{ fontSize: 20 }} onClick={this.handleModalClose}>OK</ButtonOK>
              </div>
            </div>
          </div>
        </div>
        <div hidden={!this.state.modal2}>
          <div className="modal-background">
            <div className="modal-cardforget">
              <div>
                <img className="picError" src={Error} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 160 }} >
                  <p>Email is incorrect !</p>
                </Font>
              </div>
              <div style={{ paddingLeft: 265, paddingTop: 35 }}>
                <ButtonOK style={{ fontSize: 20 }} onClick={this.handleModal2Close}>OK</ButtonOK>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ForgetPassword;