import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import Hamburger from './Hamburger'

import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { CC, EOQ, TC, OC } from '../pic'
import './Modal.css';

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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '7%'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <div style={{ paddingRight: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen1}>
                                <img className="picIn1" src={EOQ}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Economic Order
                                Quantity
                            </p>
                            </Paper>
                        </div>

                        <div style={{ paddingTop: 70}}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen3}>
                                <img className="picIn2" src={CC}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Carrying
                            Cost</p>
                            </Paper>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center' }}>
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
                            <button style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose1}></button>
                            <img src="https://greedisgoods.com/wp-content/uploads/2017/12/%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3-EOQ-%E0%B8%AB%E0%B8%B2-EOQ-%E0%B8%84%E0%B8%B7%E0%B8%AD-Economic-Order-Quantity.jpg" />
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal2}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card2">
                            <button style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose2}></button>
                            <p style={{ paddingTop: '25%', paddingLeft: '35%', fontSize: '48px' }}>0 BAHT</p>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal3}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card3">
                            <button style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose3}></button>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal4}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card4">
                            <button style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose4}></button>
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

