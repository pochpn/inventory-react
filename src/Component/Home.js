import React, { Component } from 'react'
import history from '../history'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return (
            <div>
                <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <button onClick={() => history.push('/dashboard')}>
                            Dashboard
                        </button>
                        <button onClick={() => history.push('/inventoryCost')}>
                            Inventory cost
                        </button>
                    </div>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <button onClick={() => history.push('/stock')}>
                            Stock Counting
                        </button>
                        <button>
                            ordering
                        </button>
                        <button>
                            picking
                        </button>
                    </div>
                    
                </div>
                <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                    <button>
                        order confirmation
                    </button>
                    <button>
                        confirming shipping
                    </button>
                    <button>
                        history
                    </button>   
                </div>
            </div>
        )
    }
}

export default Home;
