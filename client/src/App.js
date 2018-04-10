import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//components
import Register from './components/Register';
import RenderInfo from './components/RenderInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;
