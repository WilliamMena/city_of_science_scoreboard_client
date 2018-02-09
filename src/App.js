import React, { Component } from 'react';
import './App.css';
import logo from './WSF_Logo_300x300.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SessionList from './containers/SessionList.js'
import SessionDisplay from './components/SessionDisplay.js'
import Home from './components/Home.js'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"/>
//           <h1 className="App-title">WSF Scoreboard</h1>
//         </header>
//         <div className="App-intro">
//           <SessionList />
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">WSF Scoreboard</h1>
            <ul>
              <li className="inline"><Link className="header" to='/'>Home</Link></li>
              <li className="inline"><Link className="header" to='/sessions'>Sessions</Link></li>
            </ul>
          </header>


          <Route exact path="/" component={Home}/>
          <Route exact path="/sessions" component={SessionList}/>
          <Route exact path="/sessions/:sessionId" component={SessionDisplay}/>
        </div>
      </Router>
    );
  }
}

export default App;
