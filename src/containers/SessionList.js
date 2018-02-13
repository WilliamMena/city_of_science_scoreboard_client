import React from 'react';
import Session from '../components/Session.js'
import { connect } from 'react-redux'

import {createSession} from '../actions/sessions.js'

class SessionList extends React.Component {
  constructor() {
    super();

    this.state = {
      sessions: []
    }
  }


  handleOnClick = () => {
    this.props.createSession()
  }


  render() {
    return (
      <div className="App-intro">
        <button onClick={() => this.handleOnClick()}>
          New Session
        </button>
        <Session data={this.props.sessions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {createSession})(SessionList);
