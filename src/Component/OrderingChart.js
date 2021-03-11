import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { search } from '../pic'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

const ButtonCancel = styled.button`
  background: #A09797;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`

const ButtonClear = styled.button`
  background: #A09797;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
`

const ButtonNext = styled.button`
  background: #EF3F3E;
  border-radius: 10px;
  border: 2px;
  color: #000000;
`

const ButtonAdd = styled.button`
  background: #EF3F3E;
  border-radius: 100px;
  border: 2px;
  color: #ffffff;
`

class Ordering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],

        };
    }

    render() {
        return (
            <div className="bg">
                <Paper className='topOrdering'>
                    <p className="txtTop">Ordering Product</p>
                </Paper>
                <Paper className='topicLeft'>
                    <p className="txtTopL1">Product</p>
                    <p className="txtTopL2">Product ID</p>
                    <p className="txtTopL3">Product Name</p>
                </Paper>
                <Paper className='topicRight'>
                    <p className="txtTopR1">Product</p>
                    <p className="txtTopR2">Exp.</p>
                    <p className="txtTopR3">Shelf</p>
                    <p className="txtTopR4">Level</p>
                    <p className="txtTopR5">Cost/Unit</p>
                    <p className="txtTopR6">QTY</p>
                    <p className="txtTopR7">Amount</p>

                </Paper>
                <Paper className='dataLeft'>

                </Paper>
                <Paper className='dataRight'>

                </Paper>
                <Paper className="buttonOrder">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ paddingLeft: 10, paddingTop: 122 }}>
                            <ButtonCancel style={{ fontSize: 25, width: 184, height: 52 }} onClick={() => history.push('/ordering')}>
                                Cancel
                            </ButtonCancel>
                        </div>
                        <div style={{ paddingLeft: 690, paddingTop: 122 }}>
                            <ButtonClear style={{ fontSize: 25, width: 184, height: 52 }} >
                                Clear
                            </ButtonClear>
                        </div>
                        <div style={{ paddingLeft: 10, paddingTop: 122 }}>
                            <ButtonNext style={{ fontSize: 25, width: 184, height: 52 }}>
                                Next
                            </ButtonNext>
                        </div>

                    </div>
                </Paper>
                <Paper className='schOrder'>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: 70, paddingLeft: 30 }}>
                            <input type="text" style={{ fontSize: 13 }}></input>
                        </div>
                        <div style={{ paddingTop: 70, paddingLeft: 68 }}>
                            <input type="text" style={{ fontSize: 13 }}></input>
                        </div>
                        <div>
                            <img img className="imsch" src={search} />
                        </div>
                        <div style={{ paddingLeft: 70, paddingTop: 790 }}>
                            <ButtonAdd style={{ fontSize: 35, width: 70, height: 70 }}  onClick={() => history.push('/Ordering/orderingChart/AddProduct')}>
                                +
                            </ButtonAdd>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div >
                            <p className="txtProID">Product ID</p>
                        </div>
                        <div>
                            <p className="txtProOr">or</p>
                        </div>
                        <div>
                            <p className="txtProNm">Product Name</p>
                        </div>

                    </div>

                </Paper>
                <Hamburger page='ORDERING' user={this.state.user} />

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
        accountList: state.accountReducer.accountList,
        productProfileList: state.productProfileReducer.productProfileList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
