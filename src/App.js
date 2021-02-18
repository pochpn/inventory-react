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
import EditShelf from './Component/EditShelf'
import Ordering from './Component/Ordering'
import Picking from './Component/Picking'
import MemberManage from './Component/MemberManage'
import History from './Component/History'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={History} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/inventoryCost" component={InvenCost} />
          <Route exact path="/stock" component={Stock} />
          <Route exact path="/Ordering" component={Ordering} />
        </Switch>
      </Router>
    )
  }
}

export default App;
