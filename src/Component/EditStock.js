import React, { Component } from 'react'
import history from '../history'

class EditStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={{display:'flex', flexDirection:'column' ,justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <button>
                    Edit Shelf
                </button>
                <button>
                    Edit Products
                </button>
            </div>
      </div>
    )
  }
}

export default EditStock;
