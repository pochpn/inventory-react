import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

class EditStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bg">
        <Topbar page='EDIT STOCK'/>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Edit Stock</h1>
          </div>
          <div>
            <button>
              Edit Shelf
                </button>
            <button>
              Edit Products
                </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditStock;
