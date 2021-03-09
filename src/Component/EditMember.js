import React, { Component } from 'react'
import history from '../history'

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import firestore from "../firebase/firestore"
import storage from '../firebase/storage'

import { connect } from 'react-redux';

import { addAccount, deleteAccount, editAccount } from '../actions/accountAction'

import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'

class EditMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: this.props.location.state.member.employeeID,
            department: this.props.location.state.member.department,
            departmentID: this.props.location.state.member.departmentID,
            firstnameTH: this.props.location.state.member.firstnameTH,
            lastnameTH: this.props.location.state.member.lastnameTH,
            firstnameEN: this.props.location.state.member.firstnameEN,
            lastnameEN: this.props.location.state.member.lastnameEN,
            idCard: this.props.location.state.member.idCard,
            birthDate: this.props.location.state.member.birthDate,
            tel: this.props.location.state.member.tel,
            email: this.props.location.state.member.email,
            pass: this.props.location.state.member.pass,
            address: this.props.location.state.member.address,
            user: this.props.userList[this.props.userList.length - 1],
            id: this.props.location.state.member.id,
            pic: this.props.location.state.member.pic,
            picPre: this.props.location.state.member.pic,
        };
    }

    onEdit = () => {
        if (this.state.pic !== this.state.picPre) {
            storage.uploadProfilePic(this.state.pic, this.state.email, this.uploadSuccess, this.uploadReject)
            console.log('change')
        } else {
            const user = {
                firstnameTH: this.state.firstnameTH,
                lastnameTH: this.state.lastnameTH,
                firstnameEN: this.state.firstnameEN,
                lastnameEN: this.state.lastnameEN,
                tel: this.state.tel,
                address: this.state.address,
                pass: this.state.pass,
                pic: this.state.pic,
                id: this.state.id,
            }
            firestore.updateUserByID(user, this.editSuccess, this.editReject)
            this.props.editAccount(user)
        }
    }

    editSuccess = () => {
        console.log('Edit Success')
        history.push('/memberManage')
    }

    editReject = (error) => {
        console.log(error)
    }

    uploadSuccess = (uri) => {
        console.log(uri)
        this.setState({ pic: uri })
        const user = {
            firstnameTH: this.state.firstnameTH,
            lastnameTH: this.state.lastnameTH,
            firstnameEN: this.state.firstnameEN,
            lastnameEN: this.state.lastnameEN,
            tel: this.state.tel,
            address: this.state.address,
            pass: this.state.pass,
            pic: uri,
            id: this.state.id,
        }
        firestore.updateUserByID(user, this.editSuccess, this.editReject)
        this.props.editAccount(user)

    }

    uploadReject = (error) => {
        console.log(error)
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ pic: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    deleteSuccess = () => {
        console.log('Delete Success')
        this.props.deleteAccount(this.state.id)
        history.push('/memberManage')
    }

    deleteReject = (error) => {
        console.log(error)
    }

    onDelete = () => {
        firestore.deleteUser(this.state.id, this.deleteSuccess, this.deleteReject)
    }


    render() {
        return (
            <div className="bg">
                <Paper className="paperPhoto" >
                    <div style={{ alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',padding : 5 }}>
                        <img style={{ width: '230px', height: '230px', alignSelf: 'center' }} src={this.state.pic} />
                        <input type="file" onChange={this.onImageChange} style={{ width: '105px', alignSelf: 'center' }} />
                    </div>
                </Paper>
                <Paper className="paperAddMB" onClick={this.onEdit}>
                    <div >
                        <p className="textAddMB" >Edit</p>
                    </div>
                </Paper>
                <Paper className="paperCancelMB" onClick={() => history.push('/memberManage')}>
                    <div>
                        <p className="textCancelMB" >Cancel</p>
                    </div>
                </Paper>
                <Paper className="paperDeleteMB" onClick={this.onDelete}>
                    <div >
                        <p className="textAddMB" >Delete</p>
                    </div>
                </Paper>
                <Paper className="paperDetail" >
                    <div><p className="textP1" style={{ width: '156px', height: '39px', left: '7%', top: '2%' }} >Employee ID</p></div>
                    <div><input className="inputP1" style={{ top: '7%' }} placeholder={this.state.employeeID} readOnly ></input></div>
                    <div><p className="textP1" style={{ width: '171px', height: '39px', left: '7%', top: '12%' }}>Firstname(TH)</p></div>
                    <div><input className="editP1" style={{ top: '17%' }} placeholder={this.state.firstnameTH} onChange={txt => this.setState({ firstnameTH: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '171px', height: '39px', left: '7%', top: '22%' }}>Firstname(EN)</p></div>
                    <div><input className="editP1" style={{ top: '27%' }} placeholder={this.state.firstnameEN} onChange={txt => this.setState({ firstnameEN: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '139px', height: '39px', left: '7%', top: '32%' }}>ID card No.</p></div>
                    <div><input className="inputP1" style={{ top: '37%' }} placeholder={this.state.idCard} readOnly onChange={txt => this.setState({ idCard: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '39px', height: '39px', left: '7%', top: '42%' }}>Tel.</p></div>
                    <div><input className="editP1" style={{ top: '47%' }} placeholder={this.state.tel} onChange={txt => this.setState({ tel: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '207px', height: '39px', left: '7%', top: '52%' }}>Current Address</p></div>
                    <div><input className="editP2" style={{ top: '57%' }} placeholder={this.state.address} onChange={txt => this.setState({ address: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '150px', height: '39px', left: '49.5%', top: '2%' }}>Department</p></div>
                    <div><input className="inputP3" style={{ top: '7%' }} placeholder={this.state.department} readOnly ></input></div>
                    <div><p className="textP1" style={{ width: '170px', height: '39px', left: '49.5%', top: '12%' }}>Lastname(TH)</p></div>
                    <div><input className="editP3" style={{ top: '17%' }} placeholder={this.state.lastnameTH} onChange={txt => this.setState({ lastnameTH: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '169px', height: '39px', left: '49.5%', top: '22%' }}>Lastname(EN)</p></div>
                    <div><input className="editP3" style={{ top: '27%' }} placeholder={this.state.lastnameEN} onChange={txt => this.setState({ lastnameEN: txt.target.value })}></input></div>
                    <div><p className="textP1" style={{ width: '161px', height: '39px', left: '49.5%', top: '32%' }}>Date of Birth</p></div>
                    <div><input className="inputP3" style={{ top: '37%' }} placeholder={this.state.birthDate} readOnly ></input></div>
                    <div><p className="textP1" style={{ width: '75px', height: '39px', left: '49.5%', top: '42%' }}>E-mail</p></div>
                    <div><input className="inputP3" style={{ top: '47%' }} placeholder={this.state.email} readOnly ></input></div>
                </Paper>
                <Hamburger page='EDIT MEMBER' user={this.state.user} />
            </div>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (account) => dispatch(addAccount(account)),
        deleteAccount: (id) => dispatch(deleteAccount(id)),
        editAccount: (account) => dispatch(editAccount(account))
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMember);