import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

class Picking extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="bg">
                <Topbar page='PICKING'/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'Right' }}>
                    <div>
                        <div>
                            <p>Date</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Request Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Tel.</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Contact Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Address</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Customer Tel.</p>
                            <input type="text" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <button onClick={() => history.push('/home')}>
                                    Cancel
                        </button>
                                <button >
                                    Next
                        </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Picking;
