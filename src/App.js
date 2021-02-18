import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react'
import history from './history'

import Login from './Component/Login'
import Registration from './Component/Registration'
import ForgetPassword from './Component/ForgetPassword'

import Dashboard from './Component/Dashboard'
import Stock from './Component/Stock'
import Home from './Component/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/stock" component={Stock} />
        </Switch>
      </Router>
    )
  }
}

export default App;
