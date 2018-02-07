import React, { Component } from 'react';
import './App.css';
import logo from './WSF_Logo_300x300.jpg'

import SessionList from './containers/SessionList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">WSF Scoreboard</h1>
        </header>
        <div className="App-intro">
          <SessionList />
        </div>
      </div>
    );
  }
}

export default App;
