import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

class Ordering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            supplier: null,
            address: null,
            telSup: null,
            date: new Date(),
            contactName: null,
            telCon: null,
            reNum: null,
        };
    }

    onNext = () => {
        if ((this.state.supplier != (null && '')) && (this.state.address != (null && '')) && (this.state.telCon != (null && '')) && (this.state.telSup != (null && '')) && (this.state.date != (null && '')) && (this.state.contactName != (null && ''))) {
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
            console.log(year + mount + day + hour + min + sec)

            const info = {
                supplier: this.state.supplier,
                address: this.state.address,
                telSup: this.state.telSup,
                date: (this.state.date.getDate() + '/' + (this.state.date.getMonth() + 1) + '/' + this.state.date.getFullYear()).toString(),
                contactName: this.state.contactName,
                telCon: this.state.telCon,
                reNum: 'PO' + year + mount + day + hour + min + sec,
            }
            history.push({
                pathname: '/Ordering/orderingChart',
                state: { info: info },
            })
        }

    }

    render() {
        return (
            <div className="bg">
                <Paper className="paperOrdering">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 110, paddingLeft: 400 }}>
                            <p className="textOrSup">Supplier</p>
                            <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ supplier: txt.target.value })}></input>
                        </div>
                        <div style={{ paddingTop: 110, paddingLeft: 600 }}>
                            <p className="textOrDate">Date</p>
                            <DatePicker style={{ width: 300 }} selected={this.state.date} onChange={date => this.setState({ date: date })} dateFormat='dd/MM/yyy' />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 40, paddingLeft: 400 }}>
                            <p className="textOrAddr">Address</p>
                            <textarea type="text" style={{ fontSize: 24, height: 110, width: 333 }} onChange={txt => this.setState({ address: txt.target.value })}></textarea>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <div style={{ paddingTop: 40, paddingLeft: 600 }}>
                                <p className="textOrConN">Contact Name</p>
                                <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ contactName: txt.target.value })} />
                            </div>
                            <div style={{ paddingTop: 40, paddingLeft: 600 }}>
                                <p className="textOrTelAd">Tel.</p>
                                <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ telCon: txt.target.value })} />
                            </div>
                        </div>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 40, paddingLeft: 400 }}>
                            <p className="textOrTelCn">Tel.</p>
                            <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ telSup: txt.target.value })}></input>
                        </div>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ paddingLeft: 730, paddingTop: 50 }}>
                            <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/home')}>
                                Cancel
                            </ButtonCancel>
                        </div>
                        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
                            <ButtonNext style={{ fontSize: 25, width: 184, height: 52 }} onClick={this.onNext}>
                                Next
                            </ButtonNext>

                        </div>
                    </div>

                </Paper>
                <Hamburger page='ORDERING' user={this.state.user} />

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
        accountList: state.accountReducer.accountList,
        productProfile: state.productProfileReducer.productProfileList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
