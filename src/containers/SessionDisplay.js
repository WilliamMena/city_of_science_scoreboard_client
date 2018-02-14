import React, {Component} from 'react';
import {connect} from 'react-redux'

import PlayerScore from '../components/PlayerScore.js'
import PlayerForm from '../components/PlayerForm.js'

class SessionDisplay extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }


  displayPlayers = (players) => {
    var allPlayers = players.map(player => {
      return(
        <PlayerScore key={player.id} player={player} />
      )
    })
    return(
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {allPlayers}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className="scoreboard">
        <div className="scoreboard_display">

          {this.props.session.players ? this.displayPlayers(this.props.session.players) : "No players yet"}
        </div>
        <div className="scoreboard_form">
          <PlayerForm session_id={this.props.session.id}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const session = state.sessions.find(session => session.id == ownProps.match.params.sessionId)

  if (session) {
    return { session }
  } else {
    return { session: {} }
  }
}

export default connect(mapStateToProps)(SessionDisplay)
