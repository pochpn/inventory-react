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
                <p style={{ fontSize: 64 }}>HI</p>
            </Paper>
        );
    }
}