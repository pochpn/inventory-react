import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { logoTop, logoPump, line } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <Paper className='bill'>
                <Paper className="blackTopic">
                    <p className="txtPurc">Purchase Order</p>
                    <p className="txtsubPurc">ใบสั่งซื้อ</p>
                </Paper>
                <Paper className="borLeft">
                    <p className="txtTopicL1">Supplier :</p>
                    <p className="txtTopicL2">Address :</p>
                    <p className="txtTopicL3">Tel.</p>
                    <p className="colonTel1">:</p>
                    <p className="txtsubtp1">ผู้ขาย</p>
                    <p className="txtsubtp2">ที่อยู่</p>
                    <p className="txtsubtp3">เบอร์ติดต่อ</p>

                    <p className="txtdataL1">บจก. A จำกัด</p>
                    <p className="txtdataL2">99/9 หมู่9 ถนนเลขที่9</p>
                    <p className="txtdataL22">แขวงพระโขนงเหนือ เขตวัฒนา กทม. 10110</p>
                    <p className="txtdataL3">02-9999999</p>
                </Paper>
                <Paper className="borRight">
                    <p className="txtTopicR1">Date</p>
                    <p className="colonDate">:</p>
                    <p className="txtTopicR2">Contact Name :</p>
                    <p className="txtTopicR3">Tel.</p>
                    <p className="colonTel2">:</p>
                    <p className="txtsubtp4">วันที่สั่งซื้อ</p>
                    <p className="txtsubtp5">ผู้ติดต่อ</p>
                    <p className="txtsubtp6">เบอร์ติดต่อ</p>

                    <p className="txtdataR1">26/01/2021</p>
                    <p className="txtdataR2">ปรียาภรณ์ มุสิกะอินทร์</p>
                    <p className="txtdataR3">02-8888888</p>
                </Paper>
                <Paper className="dataBill">

                </Paper>
                <Paper className="topBill">

                </Paper>
                <Paper className="subtotalBox">

                </Paper>
                <Paper className="taxBox">

                </Paper>
                <Paper className="totalBox">

                </Paper>
                <img img className="imLogo" src={logoTop} />
                <img img className="imPump" src={logoPump} />
                <p className="txtB1">บริษัท คลังชนะ จำกัด มหาชน</p>
                <p className="txtB2">126 หมู่ 8 ตำบลทุ่งสุขลา อำเภอศรีราชา</p>
                <p className="txtB3">จังหวัดชลบุรี 20230</p>
                <p className="txtTB1">No</p>
                <p className="txtTB2">Product ID</p>
                <p className="txtTB3">ProductName</p>
                <p className="txtTB4">QTY(ea)</p>
                <p className="txtTB5">Cost/Unit</p>
                <p className="txtTB6">Amount</p>
                <img img className="line0" src={line} />
                <img img className="line1" src={line} />
                <img img className="line2" src={line} />
                <img img className="line3" src={line} />
                <img img className="line4" src={line} />
                <p className="txtSubTotal">Subtotal</p>
                <p className="txtTax">Tax</p>
                <p className="txtTotal">Total</p>
                <p className="txtsSubTotal">รวมเป็นเงิน</p>
                <p className="txtsTax">จำนวนภาษีมูลค่าเพิ่ม</p>
                <p className="txtsTotal">จำนวนเงินรวมทั้งสิ้น</p>
            </Paper>
        );
    }
}