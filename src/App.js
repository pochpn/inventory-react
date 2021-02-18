import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react'

import Login from './Component/Login'
import Login2 from './Component/Login2'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login2} />
      </div>
    )
  }
}

export default App;
