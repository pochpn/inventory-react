import React, { Component } from 'react'
import history from '../history'
import emailjs from 'emailjs-com';
import Paper from '@material-ui/core/Paper';
import firestore from "../firebase/firestore"
import styled, { css } from 'styled-components'
import { Base64 } from 'js-base64';
import './Modal.css';
import PinInput from "react-pin-input";
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
const ButtonInsert = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 170px;
  height: 48px;
  border-radius: 12px;
  paddingLeft: 10 ;
`
class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      modal3: false,
      modal4: false,
      email: null,
      user: null,
      firstnameEN: null,
      pass: null,
      Pin: null,
      pinVar: null,
      newPass: null,
      confirmPassword: null
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
    this.handleModal3Open()
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
        user : user,
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
  }

  onSend = (e) => {
    e.preventDefault()
    this.setState({ Pin: Math.floor(100000 + Math.random() * 900000).toString() })
    firestore.getUser(this.state.email, this.success, this.reject)
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
  }

  handleModal3Close = (e) => {
    /*const currentClass = e.target.className;
    if (currentClass == 'modal-cardforget') {
      return;
    }*/
    this.setState({ modal3: !this.state.modal3 });
    this.handleModal4Open()
  };


  handleModal3Open = () => {
    this.setState({ modal3: !this.state.modal3 });
  };
  onCheckP = () => {
    if (this.state.Pin === this.state.pinVar) {
      console.log("Correct!!")
      this.handleModal3Close()
    }
    else {
      console.log("incorrect")
    }
  }

  handleModal4Close = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-cardChangePass') {
      return;
    }

    this.setState({ modal4: !this.state.modal4 });
  };


  handleModal4Open = () => {
    this.setState({ modal4: !this.state.modal4 });
  };

  onOK = () => {
    if (this.state.newPass === this.state.confirmNewPass) {
      const user = this.state.user
      user.pass = Base64.encode(this.state.newPass)
      firestore.updateUserByID(user, this.upSuccess, this.upReject)
    } else {
      console.log("Password ot match!!")
    }
  }

  upSuccess = () => {
    const user = {
      firstnameTH: this.state.user.firstnameTH,
      lastnameTH: this.state.user.lastnameTH,
      firstnameEN: this.state.user.firstnameEN,
      lastnameEN: this.state.user.lastnameEN,
      tel: this.state.user.tel,
      address: this.state.user.address,
      pass: Base64.encode(this.state.newPass),
      pic: this.state.user.pic,
      id: this.state.user.id,
    }
    this.props.editAccount(user)
    alert('Update password success')
    this.setState({ modal4: !this.state.modal4 });
  }
  upReject = (e) => {
    console.log(e)
}

  render() {
    return (
      <div className="bg">
        <Paper className="paperForget">
          <form className="forget_Pass">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 32 }}>
              <div>
                <FontHead>Password Recovery</FontHead>
              </div>
              <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 35 }} >
                <p>Please enter your email for </p>
                <p>receive reset password PIN</p>
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
                  value={this.state.Pin} />
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
                  <p>Please check pin in your mail box.</p>
                </Font>
              </div>
              <div style={{ paddingLeft: 270, paddingTop: 15 }}>
                <ButtonInsert style={{ fontSize: 20 }} onClick={this.handleModalClose}>Insert Pin</ButtonInsert>
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
        <div hidden={!this.state.modal3}>
          <div className="modal-background">
            <div className="modal-cardforget" >
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }} >
                  <p>Enter Your PIN</p>
                </Font>
              </div>
              <PinInput
                length={6}
                initialValue=""
                secret
                type="numeric"
                inputMode="number"
                style={{ padding: '10px' }}
                inputStyle={{ borderColor: 'red' }}
                inputFocusStyle={{ borderColor: 'blue' }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                onChange={value => this.setState({ pinVar: value })}
                style={{ paddingLeft: 190, paddingTop: 70 }}
              />
              <div style={{ paddingLeft: 265, paddingTop: 35 }}>
                <ButtonOK style={{ fontSize: 20 }} onClick={this.onCheckP}>Submit</ButtonOK>
              </div>
            </div>
          </div>
        </div>
        <div hidden={!this.state.modal4}>
          <div className="modal-background">
            <div className="modal-cardChangePass">
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }} >Reset Password</Font>
                <Font style={{ display: 'flex', flexDirection: 'column', paddingTop: 25, paddingLeft: 20 }} ></Font>
              </div>
              <div style={{ paddingTop: 10, paddingLeft: 20 }}>
                <input type="hidden" style={{ fontSize: 24 }} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, paddingLeft: 20 }} >New Password</Font>
              </div>
              <div style={{ paddingTop: 10, paddingLeft: 20 }}>
                <input type="password" style={{ fontSize: 24 }} onChange={txt => this.setState({ newPass: txt.target.value })} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, paddingLeft: 20 }} >Confirm Password</Font>
              </div>
              <div style={{ paddingTop: 10, paddingLeft: 20 }}>
                <input type="password" style={{ fontSize: 24 }} onChange={txt => this.setState({ confirmNewPass: txt.target.value })} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }} >
                <div style={{ paddingLeft: 10, paddingTop: 50 }}>
                  <ButtonCancel style={{ fontSize: 20 }} onClick={this.handleModal4Close}>Cancel</ButtonCancel>
                </div>
                <div style={{ paddingLeft: 50, paddingTop: 50 }}>
                  <ButtonOK style={{ fontSize: 20 }} onClick={this.onOK}>OK</ButtonOK>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgetPassword;