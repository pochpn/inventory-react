import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { search } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

import './Modal.css';

import { addPickOrder, deletePickOrder, clearPickOrder } from '../actions/pickOrderAction'

const ButtonCancel = styled.button`
  background: #A09797;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`

const ButtonClear = styled.button`
  background: #A09797;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`

const ButtonNext = styled.button`
  background: #EF3F3E;
  border-radius: 10px;
  border: 2px;
  color: #000000;
`

const ButtonAdd = styled.button`
  background: #000000;
  border-radius: 100px;
  border: 2px;
  color: #ffffff;
`

const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`
const ButtonCancel1 = styled.button`
  background: #868181;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1.5em;
  `
const ButtonAdd1 = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 10px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`



class Ordering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            user: this.props.userList[this.props.userList.length - 1],
            list: [0],
        };
    }

    handleModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }

        this.setState({ modal: !this.state.modal });
    };


    handleModalOpen = () => {
        this.setState({ modal: !this.state.modal });
    };


    onClear = () => {
        this.props.clearPickOrder()
    }

    onAdd = (item) => {
        this.props.addPickOrder(item)
        console.log(this.props.pickOrderList)
        this.handleModalOpen()
    }

    onDelete = (id) => {
        this.props.deletePickOrder(id)
    }

    render() {
        return (
            <div className="bg">

                <Paper className='topOrdering'>
                    <p className="txtTop">Ordering Product</p>
                </Paper>
                <Paper className='topicLeft'>
                    <p className="txtTopL1">Product</p>
                    <p className="txtTopL2">Product ID</p>
                    <p className="txtTopL3">Product Name</p>
                </Paper>
                <Paper className='topicRight'>
                    <p className="txtTopR1">Product ID</p>
                    <p className="txtTopR2">Exp.</p>
                    <p className="txtTopR3">Shelf</p>
                    <p className="txtTopR4">Level</p>
                    <p className="txtTopR5">Cost/Unit</p>
                    <p className="txtTopR6">QTY</p>
                    <p className="txtTopR7">Amount</p>
                </Paper>

                <Paper className='dataLeft'>
                    <div style={{ paddingLeft: '1%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            {this.props.productProfileList.map((item) => {
                                return (
                                    <scroll className="paperPdInOD" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '30px', paddingLeft: '7%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={() => { this.onAdd(item) }}>
                                            <img src={item.pic} style={{ width: '40px', height: '40px' }}></img>
                                            <p className='txtPdInOD ' style={{ paddingLeft: '8%' }}>{item.productID}</p>
                                            <p className='txtPdInOD ' style={{}}>{item.productName}</p>
                                        </div>
                                    </scroll>
                                );
                            })}
                        </div>
                    </div>
                </Paper>
                <Paper className='dataRight'>
                    <div style={{ paddingLeft: '1%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            {this.props.pickOrderList.map((item) => {
                                return (
                                    <scroll style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '30px', paddingLeft: '7%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <p style={{}}>{item.productID}</p>
                                            <input style={{ width: '200px' }}></input>
                                            <input style={{ width: '120px' }}></input>
                                            <input style={{ width: '200px' }}></input>
                                            <input style={{ width: '250px' }}></input>
                                            <input style={{ width: '100px' }}></input>
                                            <p style={{}}>Cost/Unit * QTY</p>
                                            <ButtonAdd style={{ width: 30, height: 30 }} onClick={() => this.onDelete(item.id)}></ButtonAdd>
                                        </div>
                                    </scroll>
                                );
                            })}
                        </div>
                    </div>
                </Paper>
                <Paper className="buttonOrder">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ paddingLeft: 10, paddingTop: 122 }}>
                            <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => {
                                this.props.clearPickOrder()
                                history.push('/ordering')
                            }}>
                                Cancel
                            </ButtonCancel>
                        </div>
                        <div style={{ paddingLeft: 690, paddingTop: 122 }}>
                            <ButtonClear style={{ fontSize: 25, width: 184, height: 52 }} onClick={this.onClear}>
                                Clear
                            </ButtonClear>
                        </div>
                        <div style={{ paddingLeft: 10, paddingTop: 122 }}>
                            <ButtonNext style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/ordering/orderingChart/billOrder')}>
                                Next
                            </ButtonNext>
                        </div>

                    </div>
                </Paper>
                <Paper className='schOrder'>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 70, paddingLeft: 30 }}>
                            <input type="text" style={{ fontSize: 13 }}></input>
                        </div>
                        <div style={{ paddingTop: 70, paddingLeft: 68 }}>
                            <input type="text" style={{ fontSize: 13 }}></input>
                        </div>
                        <div>
                            <img img className="imsch" src={search} />
                        </div>
                        <div style={{ paddingLeft: 90, paddingTop: 50 }}>
                            <ButtonAdd style={{ fontSize: 35, width: 50, height: 50 }} onClick={() => history.push('/Ordering/orderingChart/AddProduct')}>
                                +
                            </ButtonAdd>
                        </div>


                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div >
                            <p className="txtProID">Product ID</p>
                        </div>
                        <div>
                            <p className="txtProOr">or</p>
                        </div>
                        <div>
                            <p className="txtProNm">Product Name</p>
                        </div>
                    </div>

                </Paper>

                <div hidden={!this.state.modal}>
                    <div className="modal-background">
                        <div className="modal-orderChart">
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 10 }}>
                                <Font>Product ID</Font>
                                <Font>Exp.</Font>
                                <Font>Shelf</Font>
                                <Font>Level</Font>
                                <Font>Cost/Unit</Font>
                                <Font>QTY</Font>
                                <Font>Amount</Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 30 }}>
                                <Font>Product ID</Font>
                                <input type="type" style={{ width: 150, height: 35, paddingLeft: 30, fontSize: 24 }} />
                                <Font>Shelf</Font>
                                <input type="type" style={{ width: 150, height: 35, fontSize: 24 }} />
                                <input type="type" style={{ width: 150, height: 35, fontSize: 24 }} />
                                <input type="type" style={{ width: 150, height: 35, fontSize: 24 }} />
                                <Font>Amount</Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 40}}>
                                <ButtonCancel1 style={{ width: 100, height: 50 }} onClick={this.handleModalClose}>Cancel</ButtonCancel1>
                                <ButtonAdd1 style={{ width: 100, height: 50 }} onClick={this.handleModalClose}>Add</ButtonAdd1>
                            </div>
                        </div>
                    </div>
                </div>

                <Hamburger page='ORDERING' user={this.state.user} />


            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPickOrder: (product) => dispatch(addPickOrder(product)),
        deletePickOrder: (id) => dispatch(deletePickOrder(id)),
        clearPickOrder: () => dispatch(clearPickOrder()),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        productProfileList: state.productProfileReducer.productProfileList,
        pickOrderList: state.pickOrderReducer.pickOrderList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
