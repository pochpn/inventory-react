import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { Nav, Navbar, Button, Form, FormControl, NavDropdown } from 'react-bootstrap'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <div class="topbar">
                    <Navbar >
                    <MDBHamburgerToggler color="#FFFFFF" id="hamburger1"   />
                        <Navbar href="/" style={{color: 'white',height:40,fontSize:20}}>
                        <img
                                src="https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.15752-9/152237023_129232515675141_1331579132455301323_n.png?_nc_cat=107&ccb=3&_nc_sid=ae9488&_nc_ohc=6pHEX8RMxnUAX9IurH4&_nc_ht=scontent.fbkk11-1.fna&oh=97ee3e7acba83e5b06fbb3574d54aa68&oe=605471E7"
                                height="50"
                                alt=""
                                loading="lazy"
                            />KLUNG CHANA</Navbar>
                    </Navbar>
                </div>
        )
    }
}

export default Topbar