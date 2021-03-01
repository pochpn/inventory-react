import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'

import { connect } from 'react-redux';

class ShippingConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Hamburger page='CONFIRMING SHIPPING' />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Confirming Shipping </h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <a1>MR No. </a1>
                        <input type="text" name="employeeid" />
                    </div>
                    <div>
                        <a1>Duration date</a1>
                        <input type="text" name="idcard" />
                        <a1>-</a1>
                        <input type="text" name="idcard" />
                    </div>
                    <div>
                        <button>
                            search
                    </button>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShippingConfirm);

