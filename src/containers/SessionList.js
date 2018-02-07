import React from 'react';
import Session from '../components/Session.js'

const SessionsAPI = 'http://localhost:3001/api/sessions'

class SessionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: []
    }

    // sessions: [
    //   {id: 1,
    //   players: [
    //     id: 1,
    //     name: "Rocio",
    //     score: 10
    //   ]},
    //   {id: 2,
    //   players: [
    //     {id: 3,
    //     name: "Jonathan",
    //     score: 8},
    //     {id: 4,
    //     name: "Kevin",
    //     score: 6},
    //     {id: 5,
    //     name: "Caroline",
    //     score: 7}
    //   ]}
    // ]
  }

  componentDidMount() {
    fetch(SessionsAPI)
      .then(response => response.json())
      .then(data => this.setState({ sessions: data }))
      // .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <ul>
          <Session data={this.state.sessions} />
        </ul>
      </div>
    )
  }
}

export default SessionList;
