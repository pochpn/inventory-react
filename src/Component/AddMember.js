import React, { Component } from 'react'
import history from '../history'

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
    };
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
                        <input type="text" name="employeeid" />
                    </div>
                    <div>
                        <a1>Firstname (TH)</a1>
                        <input type="text" name="fristnameth" />
                    </div>
                    <div>
                        <a1>Firstname (EN)</a1>
                        <input type="text" name="firstnameen" />
                    </div>
                    <div>
                        <a1>ID Card no.</a1>
                        <input type="text" name="idcardard" />
                    </div>
                    <div>
                        <a1>Tel</a1>
                        <input type="text" name="tel" />
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <a1>Department</a1>
                        <input type="text" name="department" />
                    </div>
                    <div>
                        <a1>Lastname (TH)</a1>
                        <input type="text" name="lastnameth" />
                    </div>
                    <div>
                        <a1>Lasrname (EN)</a1>
                        <input type="text" name="lastnameen" />
                    </div>
                    <div>
                        <a1>Date of birth</a1>
                        <input type="text" name="birthday" />
                    </div>
                    <div>
                        <a1>Email</a1>
                        <input type="text" name="email" />
                    </div>
                </div>
                
            </div>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a1>Current Address</a1>
                <input type="text" name="address" />
            </div>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <button>
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
