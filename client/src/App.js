import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//data
import * as actions from './actions/fetchData';
//components
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import SingleBranch from './components/branch/SingleBranch';

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
