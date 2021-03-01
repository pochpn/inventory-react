import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import { addAccount, clearAccount } from '../actions/accountAction'
import { connect } from 'react-redux';

class MemberManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
        };
    }

    render() {
        return (
            <div className="bg">
                <Topbar page='MEMBER MANAGEMENT'/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Member Management</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <a1>Employee id </a1>
                        <input type="text" name="employeeid" />
                    </div>
                    <div>
                        <a1>ID card number</a1>
                        <input type="text" name="idcard" />
                    </div>
                    <div>
                        <a1>Firstname</a1>
                        <input type="text" name="fristname" />
                    </div>
                    <div>
                        <a1>Lastname</a1>
                        <input type="text" name="lastname" />
                    </div>
                    <div>
                        <button onClick={() => console.log(this.props.accountList)}>
                            search
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={() => history.push('/memberManage/addMember')}>
                        Add Menber
                </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (account) => dispatch(addAccount(account)),
        clearAccount: () => dispatch(clearAccount()),
    };
};

const mapStateToProps = (state) => {
    return {
        accountList: state.accountReducer.accountList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberManage);
