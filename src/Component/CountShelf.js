import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import { counting, viewstock, editstock } from '../pic'
import Paper from '@material-ui/core/Paper';
import { search, shelf } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

const ButtonReport = styled.button`
    background: #EF3F3E;
    border-radius: 10px;
    border: 2px;
    color: #000000;
`
const ButtonInput = styled.button`
  background: #6E0D0D;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  width:20%
  padding: 0.5em 1.5em;
  `
const ButtonOk = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 125px;
  height: 52px;
  border-radius: 12px;
  margin:5%;
  
`

const ButtonCancel = styled.button`
  background: #929990;
  border: 2px;
  color: #ffffff;
  width: 125px;
  height: 52px;
  border-radius: 12px;
  margin: 5%;
  
`

class CountShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            shelf: this.props.location.state.shelf,
            modalCounting: false,
        };
    }

    openModalCounting = () => {
        this.setState({
            modalCounting: true,
        });
    };

    closeModalCounting = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({
            modalCounting: false,
        });
    };

    render() {
        return (
            <div className="bg">
                <Hamburger page={this.state.shelf} user={this.state.user} />
                <div className="paper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 className='txtTopCountShelf' style={{ fontSize: 48, fontWeight: 'bold' }}>Shelf</a1>
                        <a1 className='txtTopCountShelf' style={{ fontSize: 48, fontWeight: 'bold' }}>{this.state.shelf}</a1>
                    </div>


                </div>
                <div className="paperTopProduct" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '9%', borderRadius: '25px' }}>
                    <p className='txtProTopShelf' style={{}}>Product</p>
                    <p className='txtProTopShelf' style={{}}>Product ID</p>
                    <p className='txtProTopShelf' style={{}}>Product Name</p>
                    <p className='txtProTopShelf' style={{}}>Type</p>
                    <p className='txtProTopShelf' style={{}}>Last Check</p>
                    <p className='txtProTopShelf' style={{}}>QTY</p>
                    <p className='txtProTopShelf' style={{}}>Counting</p>
                </div>
                <scroll>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                        {this.props.productList.map((item) => {
                            item.counting = 'input'
                            if (item.shelf === this.state.shelf) {
                                return (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: '30px', width: '97%' }}>
                                        <div className='txtCountShelf'>
                                            <img src={item.pic} style={{ width: '100px', height: '100px' }}></img>
                                        </div>
                                        <p className='txtCountShelf' style={{}}>{item.productID}</p>
                                        <p className='txtCountShelf' style={{}}>{item.productName}</p>
                                        <p className='txtCountShelf' style={{}}>{item.type}</p>
                                        <p className='txtCountShelf' style={{}}>{item.qty}</p>
                                        <p className='txtCountShelf' style={{}}>{item.unit}</p>
                                        <div className='txtCountShelf' style={{}}>
                                            <ButtonInput style={{ width: 120, height: 50 }} onClick={this.openModalCounting}>{item.counting}</ButtonInput>
                                        </div>

                                    </div>
                                );
                            }

                        })}
                    </div>
                </scroll>

                <div hidden={!this.state.modalCounting}>
                    <div className="modal-background">
                        <div className="modal-cardforget">
                            <div style={{ display: 'flex', paddingTop: 35, justifyContent: 'center' }}>
                                <ButtonCancel style={{ fontSize: 20 }} onClick={this.closeModalCounting}>No</ButtonCancel>
                                <ButtonOk style={{ fontSize: 20 }} onClick={this.closeModalCounting}>Yes</ButtonOk>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ paddingLeft: 50, paddingTop: 50, alignItems: 'self-end' }}>
                    <ButtonReport style={{ fontSize: 25, width: 184, height: 52, marginBottom: '2%', marginLeft: '85%' }} onClick={() => history.push('')}>
                        Report
                    </ButtonReport>

                </div>
            </div>

        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productList: state.productReducer.productList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountShelf);
