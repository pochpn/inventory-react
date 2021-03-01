import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

class InvenCost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return (
            <div className="bg">
                <Topbar page='INVENTORY COST'/>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Inventory Cost</h1>
                </div>
                <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <button>
                            Economic Order Quantity
                        </button>
                        <button>
                            Ordering Cost
                        </button>
                    </div>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <button>
                            Carring Cost
                        </button>
                        <button>
                            Total cost
                        </button>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default InvenCost;
