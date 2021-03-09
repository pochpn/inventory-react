import React, { Component } from 'react';
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import history from '../history'
import { connect } from 'react-redux';
import { clearUser } from '../actions/userAction';
import { clearAccount } from '../actions/accountAction'
import { clearProduct } from '../actions/productAction'
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

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      logout: false,
      sidebar: false,
      user: this.props.user
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
          <span className='title'>{this.props.page}</span>
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
  };
};

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    accountList: state.accountReducer.accountList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);