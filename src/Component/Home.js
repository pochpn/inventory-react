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
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h1>Home</h1>
                </div>
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
                        <button onClick={() => history.push('/ordering')}>
                            ordering
                        </button>
                        <button onClick={() => history.push('/picking')}>
                            picking
                        </button>
                    </div>
                    
                </div>
                <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                    <button onClick={() => history.push('/orderConfirm')}>
                        order confirmation
                    </button>
                    <button onClick={() => history.push('/shippingConfirm')}>
                        confirming shipping
                    </button>
                    <button onClick={() => history.push('/history')}>
                        history
                    </button>
                    <button onClick={() => history.push('/memberManage')}>
                        Member
                    </button>
                </div>
            </div>
        )
    }
}

export default Home;
