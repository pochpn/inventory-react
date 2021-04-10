import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'

import firestore from '../firebase/firestore'
import { search, shelf } from '../pic'

import { addAccount, clearAccount } from '../actions/accountAction'
import { connect } from 'react-redux';
import { Success, DG, shelf2 } from '../pic';
import { formatMoney } from '../formatMoney'
import styled, { css } from 'styled-components'

const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`
const ButtonEdit = styled.button`
  background: #40BA8E;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  width:20%
  padding: 0.5em 1.5em;
`

const ButtonDelete = styled.button`
  background: #881313;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  width:20%
  padding: 0.5em 1.5em;
`
const ButtonYes = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`

const ButtonNo = styled.button`
  background: #929990;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
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

class EditProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            product: this.props.location.state.product,
            shelf: this.props.location.state.shelf,
            qty: 0,
        };
    }

    componentDidMount = () => {
        let qty = 0
        this.props.productList.forEach(product => {
            if (product.productID === this.state.product.productID) {
                qty += parseInt(product.qty)
            }
        })
        this.setState({ qty: qty })
    }

    handleModalSureClose = (e) => {
        this.setState({
            modalSure: false,
            modalQues: false,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };

    handleModalSureOpen = () => {
        this.setState({ modalSure: true });
    };

    ///////////////////////////
    handleModalOpen1 = () => {
        this.setState({ modal1: true });
    };

    onAddTrue = (item) => {
        this.setState({ product: item })
        console.log(item.qty)
        this.handleModalOpen1()
    }

    handleModalCloseAdd = (e) => {
        if (((this.state.qty != (null && '')) && (parseInt(this.state.qty) <= parseInt(this.state.product.qty)))) {
            const product = {...this.state.product}
            product.qty = (this.state.qty).toString()
            this.props.addPickOrder(product)

            const currentClass = e.target.className;
            if (currentClass == 'modal-cardforget') {
                return;
            }
            this.setState({
                modal1: false,
                qty: '',
            });
        } else {
            alert('QTY is invalid.')
        }
    };
    /////////////////////////////////////////////
    render() {

        return (
            <div className="bg">
                <Hamburger page={'EDIT PRODUCT '+this.state.shelf} user={this.state.user} />
                <div className="paperProductDetail" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '97%', justifyContent: 'center', alignItems: 'center', height: '145.5px' }}>
                        <p className='txtProductDetail' style={{}}>Product Picture</p>
                        <p className='txtProductDetail' style={{}}>Product ID</p>
                        <p className='txtProductDetail' style={{}}>Product Name</p>
                        <p className='txtProductDetail' style={{}}>Type</p>
                        <p className='txtProductDetail' style={{}}>Unit</p>
                        <p className='txtProductDetail' style={{}}>QTY</p>
                        <p className='txtProductDetail' style={{}}></p>
                    </div>


                </div>
                <div className="paperProductDetail" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '97%', justifyContent: 'center', alignItems: 'center', height: '145.5px' }}>
                        <div className='txtTopProductDetail'>
                            <img src={this.state.product.pic} style={{ width: '100px', height: '100px' }}></img>
                        </div>
                        <p className='txtTopProductDetail' style={{}}>{this.state.product.productID}</p>
                        <p className='txtTopProductDetail' style={{}}>{this.state.product.productName}</p>
                        <p className='txtTopProductDetail' style={{}}>{this.state.product.type}</p>
                        <p className='txtTopProductDetail' style={{}}>{this.state.product.unit}</p>
                        <p className='txtTopProductDetail' style={{}}>{this.state.qty}</p>
                        <div className='txtTopProductDetail'>
                            <ButtonDelete style={{ width: 140, height: 50 ,}} onClick={this.handleModalSureOpen}>DELETE</ButtonDelete>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalSure}>
                    <div className="modal-background">
                        <div className="modal-cardforget">
                            <div style={{ paddingTop: 20 }}>
                                <img className="picWarning" src={DG} />
                            </div>
                            <div>
                                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }} >
                                    <p>Are you sure ?</p>
                                </Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 35 }}>
                                <ButtonYes style={{ fontSize: 20 }} onClick={this.handleModalSureClose}>Yes</ButtonYes>
                                <ButtonNo style={{ fontSize: 20 }} onClick={this.handleModalSureClose}>No</ButtonNo>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="paperTopProductDetail" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '9%', borderRadius: '25px', marginTop: '1%' }}>
                    <p className='txtProTopShelf' style={{}}>Received Date</p>
                    <p className='txtProTopShelf' style={{}}>Exp.</p>
                    <p className='txtProTopShelf' style={{}}>Shelf</p>
                    <p className='txtProTopShelf' style={{}}>Level</p>
                    <p className='txtProTopShelf' style={{}}>Cost/Unit</p>
                    <p className='txtProTopShelf' style={{}}>QTY</p>
                    <p className='txtProTopShelf' style={{}}>Amount</p>
                    <p className='txtProTopShelf' style={{}}></p>
                </div>

                <scroll style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',height:'520px' ,overflow: 'auto'}}>
                    {this.props.productList.map((item) => {
                        if ((item.productID == this.state.product.productID) && (item.shelf == this.state.shelf)) {
                            return (
                                <div className="paperProduct" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: '30px', width: '97%' }}>
                                    <p className='txtProShelf' style={{}}>{item.recvDate}</p>
                                    <p className='txtProShelf' style={{}}>{item.expDate}</p>
                                    <p className='txtProShelf' style={{}}>{item.shelf}</p>
                                    <p className='txtProShelf' style={{}}>{item.level}</p>
                                    <p className='txtProShelf' style={{}}>{formatMoney(item.costPunit)}</p>
                                    <p className='txtProShelf' style={{}}>{formatMoney(item.qty)}</p>
                                    <p className='txtProShelf' style={{}}>{formatMoney(item.amount)}</p>
                                    <div className='txtProShelf'>
                                        <ButtonEdit style={{ width: 120, height: 50 }} onClick={() => this.onAddTrue(item)}>EDIT</ButtonEdit>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </scroll>
                
                <div hidden={!this.state.modal1}>
                    <div className="modal-background">
                        <div className="modal-orderChart">
                            <div style={{ display: 'flex', paddingTop: 10,justifyContent:'space-around' }}>
                                <Font>Product ID</Font>
                                <Font>Exp.</Font>
                                <Font>Shelf</Font>
                                <Font>Level</Font>
                                <Font>Cost/Unit</Font>
                                <Font>QTY</Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 30 }}>
                                <Font>{this.state.product.productID}</Font>
                                <Font>{this.state.product.expDate}</Font>
                                <Font>{this.state.product.shelf}</Font>
                                <Font>{this.state.product.level}</Font>
                                <Font>{this.state.product.costPunit}</Font>
                                <input type="number" style={{ width: 150, height: 35, fontSize: 24 }} value={this.state.qty} onChange={txt => this.setState({ qty: txt.target.value })} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}>
                                <ButtonCancel1 style={{ width: 100, height: 50 }} onClick={this.handleModalClose1}>Cancel</ButtonCancel1>
                                <ButtonAdd1 style={{ width: 100, height: 50 }} onClick={this.handleModalCloseAdd}>Add</ButtonAdd1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (account) => dispatch(addAccount(account)),
        clearAccount: () => dispatch(clearAccount()),
    };
};

const mapStateToProps = (state) => {
    return {
        accountList: state.accountReducer.accountList,
        userList: state.userReducer.userList,
        productList: state.productReducer.productList,
        productProfileList: state.productProfileReducer.productProfileList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProductDetail);
