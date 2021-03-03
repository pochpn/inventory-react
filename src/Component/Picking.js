import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import './Style.css'

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
        };
    }

    render() {
        return (
            <div className="bg">
                <Paper className="paperPicking">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 110, paddingLeft: 400 }}>
                            <p className="textPickD">Date</p>
                            <input type="text" style={{ fontSize: 24, }}></input>
                        </div>
                        <div style={{ paddingTop: 110, paddingLeft: 600 }}>
                            <p className="textPickCT">Contact Name</p>
                            <input type="text" style={{ fontSize: 24, }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ paddingTop: 48, paddingLeft: 400 }}>
                                <p className="textPickRN">Request Name</p>
                                <input type="text" style={{ fontSize: 24, }} />
                            </div>
                            <div style={{ paddingTop: 48, paddingLeft: 400 }}>
                                <p className="textPickTel">Tel.</p>
                                <input type="text" style={{ fontSize: 24, }} />
                            </div>
                        </div>
                        <div style={{ paddingTop: 48, paddingLeft: 600 }}>
                            <p className="textPickAdr">Address</p>
                            <textarea type="text" style={{ fontSize: 24, paddingBottom: 110 }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            paddingTop: 48, paddingLeft: 1334
                        }}>
                            <p className="textPickCC">Customer Tel.</p>
                            <input type="text" style={{ fontSize: 24, }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div style={{paddingLeft: 20, paddingTop: 25 }}>
                                <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/home')}>
                                    Cancel
                                </ButtonCancel>
                                <ButtonNext style={{fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/picking')}>
                                    Next
                                </ButtonNext>
                            </div>
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

