import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { logoTop, logoPump, line } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <Paper className='bill'>
                <Paper className="blackTopic">
                    <p className="txtMR">Material Request</p>
                    <p className="txtsubMR">ใบเบิกสินค้า</p>
                </Paper>
                <Paper className="borLeft">
                    <p className="txtTopicL1">Customer Name :</p>
                    <p className="txtTopicL2">Address</p>
                    <p className="colonPAddr">:</p>
                    <p className="txtTopicL3">Tel.</p>
                    <p className="colonPTel">:</p>
                    <p className="txtsubtp1">ผู้ขาย</p>
                    <p className="txtsubtp2">ที่อยู่</p>
                    <p className="txtsubtp3">เบอร์ติดต่อ</p>

                    <p className="txtPdataL1">Mig</p>
                    <p className="txtPdataL2">Na</p>
                    <p className="txtPdataL3">Ei</p>
                </Paper>
                <Paper className="borRight">
                    <p className="txtTopicR1">Date</p>
                    <p className="colonPDate">:</p>
                    <p className="txtTopicR2">Requseted Name :</p>
                    <p className="txtTopicR3">Department</p>
                    <p className="colonPDepart">:</p>
                    <p className="txtsubtp4">วันที่เบิกสินค้า</p>
                    <p className="txtsubtp5">ผู้เบิกสินค้า</p>
                    <p className="txtsubtp6">แผนก</p>

                    <p className="txtPdataR1">Mai</p>
                    <p className="txtPdataR2">Tum</p>
                    <p className="txtPdataR3">Laew</p>
                </Paper>
                <Paper className="dataBill2">
                    {this.props.pickOrderList.map((item) => {
                        return (
                            <scroll className="paperSelectPd" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '10px', }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <p className='txtPdInSl ' style={{}}>{item.productID}</p>
                                    <p className='txtPdInSl ' style={{ paddingLeft: '28px' }}>{item.expDate}</p>
                                    <p className='txtPdInSl ' style={{ paddingLeft: '10px' }}>{item.shelf}</p>
                                    <p className='txtPdInSl ' style={{ paddingLeft: '30px' }}>{item.level}</p>
                                    <p className='txtPdInSl ' style={{ paddingLeft: '60px' }}>{item.costPunit}</p>
                                    <p className='txtPdInSl ' style={{ marginLeft: '75px' }}>{item.qty}</p>
                                    <p className='txtPdInSl ' style={{}}>{item.amount}</p>
                                    <Paper className="paperSl" style={{ width: '31px', marginLeft: '3.8%', boxShadow: 'none', }} onClick={() => this.onDelete(item.id)}><p style={{ fontWeight: 'lighter', color: 'black', textAlign: 'center', paddingTop: '100%' }}> X </p></Paper>
                                </div>
                            </scroll>
                        );
                    })}
                </Paper>
                <Paper className="topBill">

                </Paper>
                <Paper className="totalBox">
                    <p className="txtTotaldata"></p>

                </Paper>
                
                <img img className="imLogo" src={logoTop} />
                <img img className="imPump2" src={logoPump} />
                <p className="txtB1">บริษัท คลังชนะ จำกัด มหาชน</p>
                <p className="txtB2">126 หมู่ 8 ตำบลทุ่งสุขลา อำเภอศรีราชา</p>
                <p className="txtB3">จังหวัดชลบุรี 20230</p>
                <p className="txtTB1">No</p>
                <p className="txtTB2">Product ID</p>
                <p className="txtTB3">ProductName</p>
                <p className="txtPTB4">Shelf</p>
                <p className="txtPTB5">Level</p>
                <p className="txtPTB6">QTY(ea)</p>
                <img img className="linee0" src={line} />
                <img img className="linee1" src={line} />
                <img img className="linee2" src={line} />
                <img img className="linee3" src={line} />
                <img img className="linee4" src={line} />
                <p className="txtTotal">Total</p>
                <p className="txtsTotal">จำนวนเงินรวมทั้งสิ้น</p>
                
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productProfile: state.productProfileReducer.productProfileList,
        notificationList: state.notificationReducer.notificationList,
        pickOrderList: state.pickOrderReducer.pickOrderList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentToPrint);