import React, { Component } from 'react';
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FaBell } from "react-icons/fa";
import history from '../history'

import { connect } from 'react-redux';
import { clearUser } from '../actions/userAction';
import { clearAccount } from '../actions/accountAction';
import { clearProduct } from '../actions/productAction';
import { clearProductProfile } from '../actions/productProfileAction';
import { clearShelf } from '../actions/shelfAction'

import { logoTopBar } from '../pic'

import styled, { css } from 'styled-components'
import './Modal.css';
import { Success } from '../pic';

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
const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`

const Arrow = styled.div`
  top: 0px;
  right: 160px;
  transform: translate(-50%, -100%);
  clip: rect(0px, 18px, 14px, -4px);
  position: absolute;
  ::after {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    transform: rotate(45deg) translate(6px, 6px);
    box-shadow: rgba(0, 0, 0, 0.44) -1px -1px 1px -1px;
    background: rgb(255, 255, 255);
  }
`

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      sidebar: false,
      user: this.props.user,
      modal1: false,
    };
  }

  handleModalClose = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-card') {
      return;
    }
    this.setState({ modal: !this.state.modal });

  };

  handleModalOpen = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleModalClose1 = (e) => {
    const currentClass = e.target.className;
    if (currentClass == 'modal-tri') {
      return;
    }
    this.setState({ modal1: !this.state.modal1 });
  };

  handleModalOpen1 = () => {
    this.setState({ modal1: !this.state.modal1 });
  };

  showSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  }



  render() {
    return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <RiMenuUnfoldLine size={40} onClick={this.showSidebar} />
          </Link>
          <div onClick={() => history.push('/home')}>
            <img className="iconKCN" src={logoTopBar} />
            <p className="tectKCN">KLUNG CHANA</p>
          </div>
          <span className='title' style={{ paddingLeft: '169px' }}>{this.props.page}</span>
          <div onClick={this.handleModalOpen1}><FaBell style={{ color: 'yellow', width: '35px', height: '35px' }}></FaBell>
            <div hidden={!this.state.modal1}>
              <div className="modal-background">
                <div className="modal-tri">
                  <Arrow />
                </div>

              </div>
            </div></div>
          <span><img style={{ width: '40px', height: '40px', borderRadius: '60%' }} src={this.state.user.pic} /></span>
          <span style={{ color: '#fff' }} onClick={() => history.push('/profile')}>{this.state.user.firstnameEN}</span>
        </div>
        <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={this.showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' style={{ paddingLeft: 18 }}>
                <RiMenuFoldLine size={40} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={() => {
                    if (item.path === '/') {
                      console.log('logout')
                      this.props.clearAccount()
                      this.props.clearUser()
                      this.props.clearProduct()
                      this.props.clearProductProfile()
                      this.props.clearShelf()
                    }
                  }}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div hidden={!this.state.modal}>
          <div className="modal-background">
            <div className="modal-card">
              <div>
                <img className="picSuccess" src={Success} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 130 }} >
                  <p>Are you sure ?</p>
                </Font>
              </div>
              <div style={{ paddingLeft: 270, paddingTop: 15 }}>
                <ButtonOK style={{ fontSize: 20 }} onClick={this.onLogout}>YES</ButtonOK>
              </div>
              <div style={{ paddingLeft: 270, paddingTop: 15 }}>
                <ButtonOK style={{ fontSize: 20 }} onClick={this.handleModalClose}>NO</ButtonOK>
              </div>
            </div>
          </div>
        </div>

      </IconContext.Provider>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearAccount: () => dispatch(clearAccount()),
    clearUser: () => dispatch(clearUser()),
    clearProduct: () => dispatch(clearProduct()),
    clearProductProfile: () => dispatch(clearProductProfile()),
    clearShelf: () => dispatch(clearShelf()),
  };
};

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);