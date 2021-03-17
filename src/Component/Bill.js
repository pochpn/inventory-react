import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import Hamburger from './Hamburger'
import Paper from '@material-ui/core/Paper';
import './Style.css'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <Paper className='bill'>
                <Paper className="blackTopic">

                </Paper>
                <Paper className="borLeft">
                    
                </Paper>
                <Paper className="borRight">
                    
                </Paper>
                <Paper className="dataBill">
                    
                </Paper>
                <Paper className="topBill">
                    
                </Paper>
            </Paper>
        );
    }
}