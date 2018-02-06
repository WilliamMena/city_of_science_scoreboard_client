import React from 'react';
import Session from '../components/Session.js'


class SessionList extends React.Component {
  constructor() {
    super();

    this.state = {
      sessions: [2]
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
