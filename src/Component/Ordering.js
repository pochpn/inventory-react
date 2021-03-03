import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import { connect } from 'react-redux';

class Ordering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Paper className="paperOrdering">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 110, paddingLeft: 400 }}>
                            <p className="textOrSup">Supplier</p>
                            <input type="text" style={{ fontSize: 24, }}></input>
                        </div>
                        <div style={{ paddingTop: 110, paddingLeft: 600 }}>
                            <p className="textOrDate">Date</p>
                            <input type="text" style={{ fontSize: 24, }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 40, paddingLeft: 400 }}>
                            <p className="textOrAddr">Address</p>
                            <textarea type="text" style={{ fontSize: 24, paddingBottom: 110 }}></textarea>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <div style={{ paddingTop: 40, paddingLeft: 615 }}>
                                <p className="textOrConN">Contact Name</p>
                                <input type="text" style={{ fontSize: 24, }} />
                            </div>
                            <div style={{ paddingTop: 40, paddingLeft: 615 }}>
                                <p className="textOrTelAd">Tel.</p>
                                <input type="text" style={{ fontSize: 24, }} />
                            </div>
                        </div>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 40, paddingLeft: 400 }}>
                            <p className="textOrTelCn">Tel.</p>
                            <input type="text" style={{ fontSize: 24, }}></input>
                        </div>

                    </div>
                    <div>



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
        accountList: state.accountReducer.accountList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
