import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'

import { addAccount, clearAccount } from '../actions/accountAction'
import { connect } from 'react-redux';

import firestore from '../firebase/firestore'

class MemberManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            accounts: this.props.accountList,
            employeeID: '',
            idCard: '',
            firstnameEN: '',
            lastnameEN: '',
        };
    }

    onSearch = () => {
        if (this.state.employeeID === '' && this.state.idCard === '' && this.state.firstnameEN === '' && this.state.lastnameEN === '') {
            this.setState({ accounts: this.props.accountList })
        } else {
            this.setState({
                accounts: this.state.accounts.filter(
                    (item) => ((item.employeeID === this.state.employeeID) ||
                        (item.firstnameEN === this.state.firstnameEN) ||
                        (item.idCard === this.state.idCard) ||
                        (item.lastnameEN === this.state.lastnameEN))
                )
            })
        }
        this.setState({
            employeeID: '',
            idCard: '',
            firstnameEN: '',
            lastnameEN: '',
        })
    }

    getSuccess = (querySnapshot) => {
        let accounts = []
        querySnapshot.forEach(doc => {
            let account = doc.data()
            account.id = doc.id
            accounts = accounts.concat(account)
        });
        this.setState({ accounts: accounts })
        console.log(this.state.accounts)
    }

    getReject = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div className="bg">
                <Hamburger page='MEMBER MANAGEMENT' user={this.state.user} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <a1>Employee id </a1>
                        <input type="text" value={this.state.employeeID} onChange={txt => this.setState({ employeeID: txt.target.value })} />
                    </div>
                    <div>
                        <a1>ID card number</a1>
                        <input type="text" value={this.state.idCard} onChange={txt => this.setState({ idCard: txt.target.value })} />
                    </div>
                    <div>
                        <a1>FirstnameEN</a1>
                        <input type="text" value={this.state.firstnameEN} onChange={txt => this.setState({ firstnameEN: txt.target.value })} />
                    </div>
                    <div>
                        <a1>LastnameEN</a1>
                        <input type="text" value={this.state.lastnameEN} onChange={txt => this.setState({ lastnameEN: txt.target.value })} />
                    </div>
                    <div>
                        <button onClick={this.onSearch}>
                            search
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={() => history.push('/memberManage/addMember')}>
                        Add Member
                    </button>
                </div>
                {this.state.accounts.map((item) => {
                    return (
                        <ul>
                            <li>{item.employeeID} - {item.firstnameEN} - {item.department} - {item.email} - {item.idCard}</li>
                        </ul>
                    );
                })}
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
        userList: state.userReducer.userList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberManage);
