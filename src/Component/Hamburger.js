import React, { useState, Component } from 'react';
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

import { connect } from 'react-redux';
import { clearUser } from '../actions/userAction';
import { clearAccount } from '../actions/accountAction'

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      user: this.props.user
    };
  }

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
          <span className='title'>{this.props.page}</span>
          <span clastyle={{ color: '#fff' }}>{this.state.user.firstnameEN}</span>
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
                    if(item.path==='/'){
                      console.log('logout')
                      this.props.clearAccount()
                      this.props.clearUser()
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
      </IconContext.Provider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      clearAccount: () => dispatch(clearAccount()),
      clearUser: () => dispatch(clearUser()),
  };
};

const mapStateToProps = (state) => {
  return {
      userList: state.userReducer.userList,
      accountList: state.accountReducer.accountList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);