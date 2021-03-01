import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'


class ViewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="bg">
                <Topbar page='VIEW STOCK'/>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>View Stock</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <a1>Shelf ID</a1>
                            <input type="text" />
                        </div>
                        <div>
                            <a1>Product ID</a1>
                            <input type="text" />
                        </div>
                        <div>
                            <a1>Product Name</a1>
                            <input type="text" />
                        </div>
                    </div>
                    <a1>Please select stock</a1>
                    <div>
                        <button>
                            S1-01
                </button>
                        <button>
                            S1-02
                </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default ViewStock;
