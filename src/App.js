import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react'
import history from './history'

import Login from './Component/Login'
import Registration from './Component/Registration'
import ForgetPassword from './Component/ForgetPassword'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard'
import InvenCost from './Component/InvenCost'
import Stock from './Component/Stock'
import ViewStock from './Component/ViewStock'
import CountingStock from './Component/CountingStock'
import EditStock from './Component/EditStock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/inventoryCost" component={InvenCost} />
          <Route exact path="/stock" component={Stock} />
          <Route exact path="/stock/viewStock" component={ViewStock} />
          <Route exact path="/stock/countingStock" component={CountingStock} />
          <Route exact path="/stock/editStock" component={EditStock} />
        </Switch>
      </Router>
    )
  }
}

export default App;
