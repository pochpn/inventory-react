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
import Ordering from './Component/Ordering'
import Picking from './Component/Picking'
import MemberManage from './Component/MemberManage'
import AddMember from './Component/AddMember'
import OrderConfirm from './Component/OrderConfirm'
import History from './Component/History'
import ShippingConfirm from './Component/ShippingConfirm'

import { Provider } from 'react-redux';
import configureStore from './Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={configureStore}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/forgetPassword" component={ForgetPassword} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/inventoryCost" component={InvenCost} />
            <Route exact path="/stock" component={Stock} />
            <Route exact path="/Ordering" component={Ordering} />
            <Route exact path="/stock/viewStock" component={ViewStock} />
            <Route exact path="/stock/countingStock" component={CountingStock} />
            <Route exact path="/stock/editStock" component={EditStock} />
            <Route exact path="/picking" component={Picking} />
            <Route exact path="/memberManage" component={MemberManage} />
            <Route exact path="/memberManage/addMember" component={AddMember} />
            <Route exact path="/history" component={History} />
            <Route exact path="/shippingConfirm" component={ShippingConfirm} />
            <Route exact path="/orderConfirm" component={OrderConfirm} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
