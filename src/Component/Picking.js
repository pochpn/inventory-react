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
                        <div style={{ paddingTop: 128, paddingLeft: 350 }}>
                            <p className="textPickD">Date</p>
                            <input type="text" style={{ fontSize: 24, }}></input>
                        </div>
                        <div style={{ paddingTop: 128, paddingLeft: 600 }}>
                            <p className="textPickCT">Contact Name</p>
                            <input type="text" style={{ fontSize: 24, }} />
                        </div>
                    </div>
                    <div>
                        <p>Request Name</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Tel.</p>
                        <input type="text" />
                    </div>

                    <div>

                        <div>
                            <div>
                                <p>Date</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Request Name</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Tel.</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Contact Name</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Address</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Customer Tel.</p>
                                <input type="text" />
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

