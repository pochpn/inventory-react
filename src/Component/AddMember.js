import React, { Component } from 'react'
import history from '../history'

import firestore from "../firebase/firestore"
import auth from "../firebase/Auth"

class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: null,
            department: null,
            firstnameTH: null,
            lastnameTH: null,
            firstnameEN: null,
            lastnameEN: null,
            idCard: null,
            birthDate: null,
            tel: null,
            email: null,
            address: null,
        };
    }

    onAdd = () => {
        const user = {
            employeeID: this.state.employeeID,
            department: this.state.department,
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
        auth.createUser(this.state.email, this.state.email, this.createReject)
        auth.signIn("admin@admin.com", "admin1", this.signReject)
    }

    signReject = (error) => {
        console.log(error)
    }

    createReject = (error) => {
        console.log(error)
    }

    addSuccess = (doc) => {
        console.log(doc.id)
    }

    addReject = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Add Member</h1>
                </div>
                <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            <a1>Employee id </a1>
                            <input type="text" name="employeeid" onChange={txt => this.setState({employeeID:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Firstname (TH)</a1>
                            <input type="text" name="fristnameth" onChange={txt => this.setState({firstnameTH:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Firstname (EN)</a1>
                            <input type="text" name="firstnameen" onChange={txt => this.setState({firstnameEN:txt.target.value})} />
                        </div>
                        <div>
                            <a1>ID Card no.</a1>
                            <input type="text" name="idcardard" onChange={txt => this.setState({idCard:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Tel</a1>
                            <input type="text" name="tel" onChange={txt => this.setState({tel:txt.target.value})} />
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            <a1>Department</a1>
                            <input type="text" name="department" onChange={txt => this.setState({department:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Lastname (TH)</a1>
                            <input type="text" name="lastnameth" onChange={txt => this.setState({lastnameTH:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Lastname (EN)</a1>
                            <input type="text" name="lastnameen" onChange={txt => this.setState({lastnameEN:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Date of birth</a1>
                            <input type="text" name="birthday" onChange={txt => this.setState({birthDate:txt.target.value})} />
                        </div>
                        <div>
                            <a1>Email</a1>
                            <input type="text" name="email" onChange={txt => this.setState({email:txt.target.value})} />
                        </div>
                    </div>
                    
                </div>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a1>Current Address</a1>
                    <input type="text" name="address" onChange={txt => this.setState({address:txt.target.value})} />
                </div>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> 
                    <button onClick={this.onAdd}>
                        Add
                    </button>
                    <button onClick={() => history.push('/memberManage')}>
                        cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default AddMember;
