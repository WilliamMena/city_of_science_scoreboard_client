import React, { Component } from 'react';
import './App.css';

import SessionList from './containers/SessionList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
