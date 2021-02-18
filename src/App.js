import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react'

import Login from './Component/Login'
import Registration from './Component/Registration'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Registration} />
      </div>
    )
  }
}

export default App;
