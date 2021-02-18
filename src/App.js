import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react'
import history from './history'

import Login from './Component/Login'
import Registration from './Component/Registration'

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
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </Router>
    )
  }
}

export default App;
