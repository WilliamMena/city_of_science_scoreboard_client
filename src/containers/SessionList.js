import React from 'react';
import Session from '../components/Session.js'

class SessionList extends React.Component {
  constructor() {
    super();

    this.state = {
      sessions: []
    }
  }

  render() {
    return (
      <div className="App-intro">
        <Session data={this.props.sessions} />
      </div>
    )
  }
}

export default SessionList;
