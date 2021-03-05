import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'

import Hamburger from './Hamburger'

import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import {CC,EOQ,TC,OC} from '../pic'

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
                <Paper className="paperInEOQ">
                    <img className="picEOQ" src={EOQ}></img>
                </Paper>
                <Paper className="paperInOc">
                    
                </Paper>
                <Paper className="paperInCc">
                    
                </Paper>
                <Paper className="paperInTc">
                    
                </Paper>
                <Hamburger page='INVENTORY COST' user={this.state.user} />
            
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

