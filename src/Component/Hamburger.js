import React, { useState, Component } from 'react';
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

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
          <span style={{color: '#fff'}}>{this.props.page}</span>
          <span style={{color: '#fff'}}>{this.state.user.firstnameEN}</span>
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
                  <Link to={item.path}>
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


export default Hamburger;