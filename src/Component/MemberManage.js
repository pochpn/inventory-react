import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

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
            <Topbar/>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Member Management</h1>
            </div>
            <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
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
                    <button>
                        search
                    </button>
                </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <button onClick={() => history.push('/memberManage/addMember')}>
                    Add Menber
                </button>
            </div>
        </div>
    )
  }
}

export default MemberManage;
