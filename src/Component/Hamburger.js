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
import { clearPickOrder } from '../actions/pickOrderAction'
import { clearBill } from '../actions/billAction'

import { logoTopBar } from '../pic'

import styled, { css } from 'styled-components'
import './Modal.css';
import { Success } from '../pic';
import NotifyMe from 'react-notification-timeline';
import './NotifyMe.scss';

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
  right: 165px;
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
      data: [
        {
          "update": "70 new employees are shifted",
          "timestamp": 1596119688264
        },
        {
          "update": "Time to Take a Break, TADA!!!",
          "timestamp": 1596119686811
        }
      ]

    };
  }

  handleModalClose = (e) => {
    this.setState({ modal: false });
  };

  handleModalOpen = () => {
    this.setState({ modal: true });
  };

  handleModalClose1 = (e) => {
    this.setState({ modal1: false });
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
          <div style={{ cursor: 'pointer' }} onClick={() => history.push('/home')}>
            <img className="iconKCN" src={logoTopBar} />
            <p className="tectKCN">KLUNG CHANA</p>
          </div>
          <span className='title' style={{ paddingLeft: '169px' }}>{this.props.page}</span>
          <div><NotifyMe
            data={this.state.data}
            storageKey='notific_key'
            notific_key='timestamp'
            notific_value='update'
            heading='Notification Alerts'
            sortedByKey={false}
            showDate={true}
            size={24}
            color="yellow"
          />
          </div>
          <div onClick={this.handleModalOpen1}><FaBell style={{ color: 'yellow', width: '35px', height: '35px', cursor: 'pointer' }}></FaBell>
            <div hidden={!this.state.modal1}>

              <div className="modal-tri" style={{ paddingTop: '1%' }}>
                <Arrow />
                {this.props.notificationList.map((item) => {
                  return (
                    <scroll className="paperNoti" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <p className='txtPdInOD' style={{}}>{item.notificationHead}</p>
                      </div>
                    </scroll>
                  );
                })}
              </div>

            </div>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => history.push('/profile')}>
            <span><img style={{ width: '40px', height: '40px', borderRadius: '60%' }} src={this.state.user.pic}/></span>
            <span style={{ color: '#fff'}}>{this.state.user.firstnameEN}</span>
          </div>
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
                      this.props.clearPickOrder()
                      this.props.clearBill()
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
    clearPickOrder: () => dispatch(clearPickOrder()),
    clearBill: () => dispatch(clearBill()),
  };
};

const mapStateToProps = (state) => {
  return {
    notificationList: state.notificationReducer.notificationList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);