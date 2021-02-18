import React, { Component } from 'react'
import history from '../history'

class ViewStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display:'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <a1>Shelf ID</a1>
                    <input type="text"/>
                </div>
                <div>
                    <a1>Product ID</a1>
                    <input type="text"/>
                </div>
                <div>
                    <a1>Product Name</a1>
                    <input type="text"/>
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
                <button>
                    ADD
                </button>
            </div>
      </div>
    )
  }
}

export default ViewStock;
