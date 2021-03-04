import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'

import { connect } from 'react-redux';
import { purple } from '@material-ui/core/colors';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import { search, shelf } from '../pic'
import Paper from '@material-ui/core/Paper';

class ViewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Hamburger page='VIEW STOCK' user={this.state.user} />
                <div className="paper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Shelf ID</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%", justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Product ID</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%", justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'  }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Product Name</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <img
                        style={{ justifyContent: 'flex-end', width: "10%", }}
                        src={search} />

                </div>
                <div style={{ display: 'flex', alignItems: 'center', height: "10%" }}>
                    <a1 style={{ fontSize: 36, fontWeight: 'bold', marginLeft: "5%" }}>Please select stock</a1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "1.5%", paddingLeft: "10%" }}>
                        <Paper className="paperShelf" style={{ borderRadius: "10%" }} onClick={() => history.push({
                            pathname: '/stock/viewStock/shelf',
                            state: { shelf: 'S1-01' },
                        })}>
                            <div>
                                <img className="imViewStock" src={shelf} />
                                <p className="textViewStock">S1-01</p>
                            </div>
                        </Paper>
                        <Paper className="paperShelf" style={{ borderRadius: "10%" }} 
                                onClick={() => history.push({
                                pathname: '/stock/viewStock/shelf',
                                state: { shelf: 'S1-02' },
                            })}>
                            <div>
                                <img className="imViewStock" src={shelf} />
                                <p className="textViewStock">S1-02</p>
                            </div>
                        </Paper>
                    
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);
