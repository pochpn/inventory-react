import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import './Style.css'
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
                            <button onClick={() => history.push('/home')}>
                                Cancel
                            </button>
                            <button >
                                Next
                            </button>
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

