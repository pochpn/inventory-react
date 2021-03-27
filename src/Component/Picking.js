import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import './Style.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styled, { css } from 'styled-components'


const ButtonCancel = styled.button`
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

class Picking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            date: new Date(),
            reqName: null,
            telReq: null,
            customerName: null,
            address: null,
            telCus: null,
        };
    }

    onNext = () => {
        if ((this.state.reqName != (null && '')) && (this.state.telReq != (null && '')) && (this.state.customerName != (null && '')) && (this.state.address != (null && '')) && (this.state.telCus != (null && ''))) {
            let date = this.state.date
            let year = date.getFullYear().toString().substr(2, 3)
            let mount = date.getMonth().toString()
            if (date.getMonth().toString().length === 1) {
                mount = '0' + date.getMonth().toString()
            }
            let day = date.getDate().toString()
            if (date.getDate().toString().length === 1) {
                day = '0' + date.getDate().toString()
            }
            let hour = date.getHours().toString()
            if (date.getHours().toString().length === 1) {
                day = '0' + date.getHours().toString()
            }
            let min = date.getMinutes().toString()
            if (date.getMinutes().toString().length === 1) {
                day = '0' + date.getMinutes().toString()
            }
            let sec = date.getSeconds().toString()
            if (date.getSeconds().toString().length === 1) {
                day = '0' + date.getSeconds().toString()
            }

            const info = {
                reqName: this.state.reqName,
                telReq: this.state.telReq,
                customerName: this.state.customerName,
                address: this.state.address,
                telCus: this.state.telCus,
                date: (this.state.date.getDate() + '/' + (this.state.date.getMonth() + 1) + '/' + this.state.date.getFullYear()).toString(),
                reNum: 'MA' + year + mount + day + hour + min + sec,
            }
            history.push({
                pathname: '/picking/pickingChart',
                state: { info: info },
            })
        }
    }

    render() {
        return (
            <div className="bg">
                <Paper className="paperPicking">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 110, paddingLeft: 400 }}>
                            <p className="textPickD">Date</p>
                            <DatePicker style={{ width: 300 }} selected={this.state.date} onChange={date => this.setState({ date: date })} dateFormat='dd/MM/yyy' />
                        </div>
                        <div style={{ paddingTop: 110, paddingLeft: 710 }}>
                            <p className="textPickCT">CustomerName</p>
                            <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ customerName: txt.target.value })} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ paddingTop: 48, paddingLeft: 400 }}>
                                <p className="textPickRN">Request Name</p>
                                <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ reqName: txt.target.value })} />
                            </div>
                            <div style={{ paddingTop: 48, paddingLeft: 400 }}>
                                <p className="textPickTel">Tel.</p>
                                <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ telReq: txt.target.value })} />
                            </div>
                        </div>
                        <div style={{ paddingTop: 48, paddingLeft: 600 }}>
                            <p className="textPickAdr">Address</p>
                            <textarea type="text" style={{ fontSize: 24, height: 179, width: 333 }} onChange={txt => this.setState({ address: txt.target.value })} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            paddingTop: 48, paddingLeft: 1334
                        }}>
                            <p className="textPickCC">Customer Tel.</p>
                            <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ telCus: txt.target.value })} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

                        <div style={{ paddingLeft: 0, paddingTop: 25 }}>
                            <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/home')}>
                                Cancel
                                </ButtonCancel>
                        </div>
                        <div style={{ paddingLeft: 50, paddingTop: 25 }}>
                            <ButtonNext style={{ fontSize: 25, width: 184, height: 52 }} onClick={this.onNext}>
                                Next
                            </ButtonNext>
                        </div>
                    </div>
                </Paper>
                <Hamburger page='PICKING' user={this.state.user} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Picking);

