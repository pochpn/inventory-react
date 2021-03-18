import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

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
            date: null,
            contactName: null,
            telCon: null,
        };
    }

    onNext = () => {
        if ((this.state.supplier != (null && '')) && (this.state.address != (null && '')) && (this.state.telCon != (null && '')) && (this.state.telSup != (null && '')) && (this.state.date != (null && '')) && (this.state.contactName != (null && ''))) {
            const info = {
                supplier: this.state.supplier,
                address: this.state.address,
                telSup: this.state.telSup,
                date: this.state.date,
                contactName: this.state.contactName,
                telCon: this.state.telCon,
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
                            <input type="text" style={{ fontSize: 24, }} onChange={txt => this.setState({ date: txt.target.value })} />
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
