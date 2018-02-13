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
        <div key={player.id}>
          <PlayerScore player={player} />
        </div>
      )
    })
    return(
      <ul>
        {allPlayers}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <div className="scoreboard_display">
          ID: {this.props.session.id}

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
