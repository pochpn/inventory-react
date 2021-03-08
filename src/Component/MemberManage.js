import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import { addAccount, clearAccount } from '../actions/accountAction'
import { connect } from 'react-redux';
import { search } from '../pic'
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
            tel: '',
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

    onMember = (item) => {
        history.push({
            pathname: '/memberManage/editMember',
            state: { member: item },
        })
    }

    render() {
        return (
            <div className="bg">

                <Paper className="paperSearchMB" >


                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Employee ID</a1>
                        <input type="text" style={{ fontSize: 24, borderWidth: 0 }} value={this.state.employeeID} onChange={txt => this.setState({ employeeID: txt.target.value })}></input>
                        <div><button className="buttonAddMB" style={{ fontSize: 20 }} onClick={() => history.push('/memberManage/addMember')}>Add Member</button></div>

                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%", justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>ID card number</a1>
                        <input type="text" style={{ fontSize: 24, borderWidth: 0 }} value={this.state.idCard} onChange={txt => this.setState({ idCard: txt.target.value })}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%", justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>First Name</a1>
                        <input type="text" style={{ fontSize: 24, borderWidth: 0 }} value={this.state.firstnameEN} onChange={txt => this.setState({ firstnameEN: txt.target.value })}></input>
                    </div>
                    <div style={{ display: 'flex', margin: "0.5%", paddingTop: "2%", justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>or</a1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'lighter' }}>Last Name</a1>
                        <input type="text" style={{ fontSize: 24, borderWidth: 0 }} value={this.state.lastnameEN} onChange={txt => this.setState({ lastnameEN: txt.target.value })}></input>
                    </div>
                    <img
                        style={{ justifyContent: 'flex-end', width: "10%", }}
                        src={search}
                        onClick={this.onSearch}></img>
                </Paper>

                <Hamburger page='MEMBER MANAGEMENT' user={this.state.user} />
                <div style={{ paddingTop: 250, paddingLeft: 200 }}>
                    {this.state.accounts.map((item) => {
                        if (item.email !== this.state.user.email) {
                            return (
                                <div style={{ width: '90%' }}>
                                    <Paper className="paper" style={{ display: 'flex', flexDirection: 'row' }}
                                        onClick={() => {
                                            history.push({
                                                pathname: '/memberManage/editMember',
                                                state: { member: item },
                                            })
                                        }} >
                                        <img style={{ width: '100px', height: '100px', alignSelf: 'center' }} src={item.pic} />
                                        <ul>
                                            <div><p>Employee ID : {item.employeeID}</p></div>
                                            <div><p>Department : {item.department}</p></div>
                                            <div><p>Name : {item.firstnameEN} {item.lastnameEN}</p></div>
                                            <div><p>Tel : {item.tel}</p></div>
                                        </ul>
                                    </Paper>
                                </div>
                            );
                        }
                    })}
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
        userList: state.userReducer.userList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberManage);
