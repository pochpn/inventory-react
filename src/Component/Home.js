import React, { Component } from 'react'

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
                        <button>
                            Dashboard
                        </button>
                        <button>
                            Inventory cost
                        </button>
                    </div>
                    <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
                        <button>
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
