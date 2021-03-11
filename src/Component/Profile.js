import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import './Style.css'

import Paper from '@material-ui/core/Paper';
import Hamburger from './Hamburger'

import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Paper className="paperPhoto" >
                    <div style={{ alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',padding: 18 }}>
                        <img style={{ width: '230px', height: '230px', alignSelf: 'center' }} src={this.state.user.pic} />
                    </div>
                </Paper>
                <Paper className="paperDetail" >
                    <div><p className="textP1" style={{ width: '156px', height: '39px', left: '7%', top: '2%' }}>Employee ID</p></div>
                    <div><input placeholder={this.state.user.employeeID} className="inputP1" style={{ top: '7%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '171px', height: '39px', left: '7%', top: '12%' }}>Firstname(TH)</p></div>
                    <div><input placeholder={this.state.user.firstnameTH} className="inputP1" style={{ top: '17%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '171px', height: '39px', left: '7%', top: '22%' }}>Firstname(EN)</p></div>
                    <div><input placeholder={this.state.user.firstnameEN} className="inputP1" style={{ top: '27%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '139px', height: '39px', left: '7%', top: '32%' }}>ID card No.</p></div>
                    <div><input placeholder={this.state.user.idCard} className="inputP1" style={{ top: '37%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '39px', height: '39px', left: '7%', top: '42%' }}>Tel.</p></div>
                    <div><input placeholder={this.state.user.tel} className="inputP1" style={{ top: '47%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '207px', height: '39px', left: '7%', top: '52%' }}>Current Address</p></div>
                    <div><input placeholder={this.state.user.address} className="inputP2" style={{ top: '57%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '150px', height: '39px', left: '49.5%', top: '2%' }}>Department</p></div>
                    <div><input placeholder={this.state.user.department} className="inputP3" style={{ top: '7%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '170px', height: '39px', left: '49.5%', top: '12%' }}>Lastname(TH)</p></div>
                    <div><input placeholder={this.state.user.lastnameTH} className="inputP3" style={{ top: '17%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '169px', height: '39px', left: '49.5%', top: '22%' }}>Lastname(EN)</p></div>
                    <div><input placeholder={this.state.user.lastnameEN} className="inputP3" style={{ top: '27%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '161px', height: '39px', left: '49.5%', top: '32%' }}>Date of Birth</p></div>
                    <div><input placeholder={this.state.user.birthDate} className="inputP3" style={{ top: '37%' }} readOnly></input></div>
                    <div><p className="textP1" style={{ width: '75px', height: '39px', left: '49.5%', top: '42%' }}>E-mail</p></div>
                    <div><input placeholder={this.state.user.email} className="inputP3" style={{ top: '47%' }} readOnly></input></div>
                </Paper>
                <Paper className="paperChangePass" 
                onClick={()=>console.log(this.state.user)}>
                    <div>
                        <p className="textChangePass">Change Password</p>
                    </div>
                </Paper>

                <Hamburger page='PROFILE' user={this.state.user} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);