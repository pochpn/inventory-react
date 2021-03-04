import React, { Component } from 'react'
import history from '../history'

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import firestore from "../firebase/firestore"

import { connect } from 'react-redux';

import { addAccount } from '../actions/accountAction'

import Topbar from './Topbar'
import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'

class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: null,
            department: 'N/A',
            departmentID: null,
            firstnameTH: null,
            lastnameTH: null,
            firstnameEN: null,
            lastnameEN: null,
            idCard: null,
            birthDate: null,
            tel: null,
            email: null,
            address: null,
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    onAdd = () => {
        const user = {
            employeeID: this.state.employeeID,
            department: this.state.department,
            departmentID: this.state.departmentID,
            firstnameTH: this.state.firstnameTH,
            lastnameTH: this.state.lastnameTH,
            firstnameEN: this.state.firstnameEN,
            lastnameEN: this.state.lastnameEN,
            idCard: this.state.idCard,
            birthDate: this.state.birthDate,
            tel: this.state.tel,
            email: this.state.email,
            address: this.state.address,
            pass: this.state.email,
        }
        firestore.addUser(user, this.addSuccess, this.addReject)
        this.props.addAccount(user)
    }

    addSuccess = (doc) => {
        
        console.log(doc.id)
    }

    addReject = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div className="bg">
                <Paper className="paperPhoto" >
                    <div>

                    </div>
                </Paper>
                <Paper className="paperAddMB" >
                    <div >
                        <p className="textAddMB">Add</p>
                    </div>
                </Paper>
                <Paper className="paperCancelMB" >
                    <div>
                        <p className="textCancelMB">Cancel</p>
                    </div>
                </Paper>
                <Paper className="paperDetail" >
                    <div><p className="textP1" style={{width: '156px', height: '39px',left: '7%',top: '2%'}} >Employee ID</p></div>
                    <div><input className="inputP1" style={{top: '7%'}} onChange={txt => this.setState({ employeeID: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '171px', height: '39px',left: '7%',top: '12%'}}>Firstname(TH)</p></div>
                    <div><input className="inputP1" style={{top: '17%'}} onChange={txt => this.setState({ firstnameTH: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '171px', height: '39px',left: '7%',top: '22%'}}>Firstname(EN)</p></div>
                    <div><input className="inputP1" style={{top: '27%'}} onChange={txt => this.setState({ firstnameEN: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '139px', height: '39px',left: '7%',top: '32%'}}>ID card No.</p></div>
                    <div><input className="inputP1" style={{top: '37%'}} onChange={txt => this.setState({ idCard: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '39px', height: '39px',left: '7%',top: '42%'}}>Tel.</p></div>
                    <div><input className="inputP1" style={{top: '47%'}} onChange={txt => this.setState({ tel: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '207px', height: '39px',left: '7%',top: '52%'}}>Current Address</p></div>
                    <div><input className="inputP2" style={{top: '57%'}} onChange={txt => this.setState({ address: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '150px', height: '39px',left: '49.5%',top: '2%'}}>Department</p></div>
                    <div style={{paddingTop:'8%'}}><MDBDropdown className="inputP4"  dropright>
                                 <MDBDropdownToggle caret color="primary">
                                     {this.state.department}
                                 </MDBDropdownToggle>
                                 <MDBDropdownMenu basic>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'Admin',
                                         departmentID: 7
                                     })}>Admin</MDBDropdownItem>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'Manager',
                                         departmentID: 6
                                     })}>Manager</MDBDropdownItem>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'StockChecker',
                                         departmentID: 5
                                     })}>StockChecker</MDBDropdownItem>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'Orderer',
                                         departmentID: 4
                                     })}>Orderer</MDBDropdownItem>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'Picker',
                                         departmentID: 3
                                     })}>Picker</MDBDropdownItem>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'OrderConfirm',
                                         departmentID: 2
                                     })}>OrderConfirm</MDBDropdownItem>
                                     <MDBDropdownItem onClick={() => this.setState({
                                         department: 'ConfirmShipping',
                                         departmentID: 1
                                     })}>ConfirmShipping</MDBDropdownItem>
                                 </MDBDropdownMenu>
                             </MDBDropdown></div>
                    <div><p className="textP1" style={{width: '170px', height: '39px',left: '49.5%',top: '12%'}}>Lastname(TH)</p></div>
                    <div><input className="inputP3" style={{top: '17%'}} onChange={txt => this.setState({ lastnameTH: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '169px', height: '39px',left: '49.5%',top: '22%'}}>Lastname(EN)</p></div>
                    <div><input className="inputP3" style={{top: '27%'}} onChange={txt => this.setState({ lastnameEN: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '161px', height: '39px',left: '49.5%',top: '32%'}}>Date of Birth</p></div>
                    <div><input className="inputP3" style={{top: '37%'}} onChange={txt => this.setState({ birthDate: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{width: '75px', height: '39px',left: '49.5%',top: '42%'}}>E-mail</p></div>
                    <div><input className="inputP3" style={{top: '47%'}} onChange={txt => this.setState({ email: txt.target.value })}></input></div>
                </Paper>
                

                <Hamburger page='EDIT PROFILE' user={this.state.user} />

            </div>

            // <div>
            //     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            //         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            //             <div>
            //                 <a1>Employee id </a1>
            //                 <input type="text" name="employeeid" onChange={txt => this.setState({ employeeID: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>Firstname (TH)</a1>
            //                 <input type="text" name="fristnameth" onChange={txt => this.setState({ firstnameTH: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>Firstname (EN)</a1>
            //                 <input type="text" name="firstnameen" onChange={txt => this.setState({ firstnameEN: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>ID Card no.</a1>
            //                 <input type="text" name="idcardard" onChange={txt => this.setState({ idCard: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>Tel</a1>
            //                 <input type="text" name="tel" onChange={txt => this.setState({ tel: txt.target.value })} />
            //             </div>
            //         </div>
            //         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            //             <div>
            //                 <a1>Department</a1>
            //                 <MDBDropdown dropright>
            //                     <MDBDropdownToggle caret color="primary">
            //                         {this.state.department}
            //                     </MDBDropdownToggle>
            //                     <MDBDropdownMenu basic>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'Admin',
            //                             departmentID: 7
            //                         })}>Admin</MDBDropdownItem>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'Manager',
            //                             departmentID: 6
            //                         })}>Manager</MDBDropdownItem>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'StockChecker',
            //                             departmentID: 5
            //                         })}>StockChecker</MDBDropdownItem>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'Orderer',
            //                             departmentID: 4
            //                         })}>Orderer</MDBDropdownItem>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'Picker',
            //                             departmentID: 3
            //                         })}>Picker</MDBDropdownItem>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'OrderConfirm',
            //                             departmentID: 2
            //                         })}>OrderConfirm</MDBDropdownItem>
            //                         <MDBDropdownItem onClick={() => this.setState({
            //                             department: 'ConfirmShipping',
            //                             departmentID: 1
            //                         })}>ConfirmShipping</MDBDropdownItem>
            //                     </MDBDropdownMenu>
            //                 </MDBDropdown>
            //             </div>
            //             <div>
            //                 <a1>Lastname (TH)</a1>
            //                 <input type="text" name="lastnameth" onChange={txt => this.setState({ lastnameTH: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>Lastname (EN)</a1>
            //                 <input type="text" name="lastnameen" onChange={txt => this.setState({ lastnameEN: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>Date of birth</a1>
            //                 <input type="text" name="birthday" onChange={txt => this.setState({ birthDate: txt.target.value })} />
            //             </div>
            //             <div>
            //                 <a1>Email</a1>
            //                 <input type="text" name="email" onChange={txt => this.setState({ email: txt.target.value })} />
            //             </div>
            //         </div>

            //     </div>
            //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            //         <a1>Current Address</a1>
            //         <input type="text" name="address" onChange={txt => this.setState({ address: txt.target.value })} />
            //     </div>
            //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            //         <button onClick={this.onAdd}>
            //             Add
            //         </button>
            //         <button onClick={() => history.push('/memberManage')}>
            //             cancel
            //         </button>
            //     </div>
            // </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (account) => dispatch(addAccount(account)),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
