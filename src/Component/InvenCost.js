import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import Hamburger from './Hamburger'

import { connect } from 'react-redux';

class InvenCost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    render() {
        return (
            <div className="bg">
                <Hamburger page='INVENTORY COST' user={this.state.user} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <button>
                            Economic Order Quantity
                        </button>
                        <button>
                            Ordering Cost
                        </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvenCost);

