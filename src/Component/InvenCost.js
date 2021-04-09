import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import Hamburger from './Hamburger'
import { IoIosCloseCircle } from "react-icons/io";
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Input, Paper } from '@material-ui/core';
import { CC, EOQ, TC, OC } from '../pic'
import './Modal.css';

const Font2 = styled.div`
  && {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
`

class InvenCost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
        };
    }

    handleModalClose1 = (e) => {
        this.setState({ modal1: false });
    };

    handleModalOpen1 = () => {
        this.setState({ modal1: true });
    };

    handleModalClose2 = (e) => {
        this.setState({ modal2: false });
    };

    handleModalOpen2 = () => {
        this.setState({ modal2: true });
    };
    handleModalClose3 = (e) => {
        this.setState({ modal3: false });
    };

    handleModalOpen3 = () => {
        this.setState({ modal3: true });
    };

    handleModalClose4 = (e) => {
        this.setState({ modal4: false });
    };

    handleModalOpen4 = () => {
        this.setState({ modal4: true });
    };

    render() {
        return (
            <div className="bg">
                <Hamburger page='INVENTORY COST' user={this.state.user} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '7%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <div style={{ paddingRight: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen1}>
                                <img className="picIn1" src={EOQ}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Economic Order
                                Quantity
                            </p>
                            </Paper>
                        </div>

                        <div style={{ paddingTop: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen3}>
                                <img className="picIn2" src={CC}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Carrying
                            Cost</p>
                            </Paper>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Paper className="paperInEOQ" onClick={this.handleModalOpen2} >
                            <img className="picIn3" src={OC}></img>
                            <p className="textInventC" style={{ paddingTop: '8%' }}>Ordering
                            Cost</p>
                        </Paper>
                        <div style={{ paddingTop: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen4}>
                                <img className="picIn3" src={TC}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Total
                            Cost</p>
                            </Paper>
                        </div>

                    </div>

                </div>
                <div hidden={!this.state.modal1}>
                    <div className="modal-background">
                        <div className="modal-card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ paddingLeft: '95%' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose1}></IoIosCloseCircle></div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '160px', height: '70px', marginLeft: '5%' }} src={EOQ}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
                                    <p>number of work days in the year</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '45px', borderWidth: '0', paddingLeft: '9px', marginLeft: '30%' }}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                                    </div>
                                </div>
                                <button style={{ fontWeight: 'lighter', color: 'white', height: '70px', width: '120px', borderWidth: '0', marginLeft: '10%', backgroundColor: 'darkred', borderRadius: '10px' }}>EOQ MANUAL</button>
                            </div>
                            <div style={{ paddingTop: '40px' }}><Paper className='eoqTable' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Font2>Product Name</Font2>
                                    <Font2>EOQ</Font2>
                                    <Font2>Number of orders/year</Font2>
                                    <Font2>Order lead time</Font2>
                                </div>
                            </Paper></div>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal2}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose2}></IoIosCloseCircle></div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '140px', height: '80px', marginLeft: '5%' }} src={OC}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '7%' }}>
                                    <p>Insert Ordering Cost</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '100px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal3}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose3}></IoIosCloseCircle></div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '140px', height: '80px', marginLeft: '5%' }} src={CC}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '7%' }}>
                                    <p>Insert Carrying Cost</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '100px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal4}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose4}></IoIosCloseCircle></div>
                            <img style={{ width: '140px', height: '80px', marginLeft: '5%' }} src={TC}></img>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InvenCost);

