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

class CountShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            shelf: this.props.location.state.shelf,
        };
    }

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
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        {this.props.productList.map((item) => {
                            if (item.shelf === this.state.shelf) {
                                return (
                                    <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: '30px', width: '97%' }}>
                                        <div className='txtCountShelf'>
                                            <img src={item.pic} style={{ width: '100px', height: '100px' }}></img>
                                        </div>
                                        <p className='txtCountShelf' style={{}}>{item.productID}</p>
                                        <p className='txtCountShelf' style={{}}>{item.productName}</p>
                                        <p className='txtCountShelf' style={{}}>{item.type}</p>
                                        <p className='txtCountShelf' style={{}}>{item.qty}</p>
                                        <p className='txtCountShelf' style={{}}>{item.unit}</p>
                                        <input className='txtCountShelf' style={{}}></input>
                                    </div>
                                );
                            }

                        })}
                    </div>
                </scroll>

                <div style={{ paddingLeft: 50, paddingTop: 50 ,alignItems:'self-end' }}>
                    <ButtonReport style={{ fontSize: 25, width: 184, height: 52,marginBottom:'2%', marginLeft:'85%'}} onClick={() => history.push('')}>
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
