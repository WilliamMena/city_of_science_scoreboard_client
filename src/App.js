import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getSessions } from './actions/sessions.js'

import SessionList from './containers/SessionList.js'
import SessionDisplay from './containers/SessionDisplay.js'
import SessionScoreboard from './containers/SessionScoreboard.js'
import Home from './components/Home.js'

class App extends Component {

  componentDidMount() {
    this.props.getSessions()
  }



  render() {
    return (
      <Router>
        <div className="App">
        {
          /*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">WSF Scoreboard</h1>
            <ul>
              <li className="inline"><Link className="header" to='/'>Home</Link></li>
              <li className="inline"><Link className="header" to='/sessions'>Sessions</Link></li>
            </ul>
          </header>
          */
        }

        {
          /*
          <header className="App-header">
            <h1></h1>
          </header>
          */
        }


          <Route exact path="/" component={Home}/>
          {
            // <Route exact path="/sessions" component={SessionList}/>
          }
          <Route exact path="/sessions" render={() => <SessionList sessions={this.props.sessions} />} />
          <Route exact path="/sessions/:sessionId" component={SessionDisplay}/>
          <Route exact path="/sessions/:sessionId/scoreboard" component={SessionScoreboard}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    sessions: state.sessions
  })
}

export default connect(mapStateToProps, {getSessions})(App);
