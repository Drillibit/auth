import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
//data
import * as actions from './actions/fetchData';
//Auth check
import PrivateRoute from './components/user/Auth';
//components
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import SingleBranch from './components/branch/SingleBranch';

import MaterialFormMain from './components/MaterialForm/MaterialFormMain';

const Loading = () => <div>Loading...</div>;

const BranchFormMain = Loadable({
  loader: () => import('./components/BranchForm/BranchFormMain'),
  loading: Loading
});

class App extends Component {
  componentDidMount(){
    this.props.fetchData();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/branch/:id" component={SingleBranch} />
            <Route path="/add_material" component={MaterialFormMain} />
            <Route path="/add_branch" component={BranchFormMain} />
            <PrivateRoute path="/prot" component={BranchFormMain} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
