import React from 'react';
import Session from '../components/Session.js'


const SessionsAPI = 'http://localhost:3001/api/sessions'

class SessionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: []
    }
  }

  componentDidMount() {
    fetch(SessionsAPI)
      .then(response => response.json())
      .then(data => this.setState({ sessions: data }))
      // .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App-intro">
        <a href="/sessions/1"> Link to first session </a>
          <Session data={this.state.sessions} />
      </div>
    )
  }
}

export default SessionList;
