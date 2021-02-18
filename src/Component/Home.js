import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        const back = {
            color: "white",
            backgroundColor: "white",
            padding: "10px",
            fontFamily: "Arial",
            margin:"10%",
            
          };
        const dashBoard = {
            width:"40%",
            height:"40%",
            color: "white",
            backgroundColor: "pink",
            padding: "10px",
            fontFamily: "Arial",
            //margin:
          };
          const stockCount = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "black",
            padding: "10px",
            fontFamily: "Arial"
          };
          const invenCost = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "green",
            padding: "10px",
            fontFamily: "Arial"
          };
          const ordering = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "black",
            padding: "10px",
            fontFamily: "Arial"
          };
          const picking = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "black",
            padding: "10px",
            fontFamily: "Arial"
          };
          const orderCon = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "black",
            padding: "10px",
            fontFamily: "Arial"
          };
          const shipCon = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "gray",
            padding: "10px",
            fontFamily: "Arial"
          };
          const history = {
            width:"40%",
            height:"40%",
            color: "pink",
            backgroundColor: "purple",
            padding: "10px",
            fontFamily: "Arial"
          };
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
