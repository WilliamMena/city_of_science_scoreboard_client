import React, {Component} from 'react';
import {connect} from 'react-redux'

import PlayerScorebackend from '../components/PlayerScoreBackend.js'
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
    var playersInOrderByScore = players.sort((a, b) => b.score - a.score)
    var allPlayers = playersInOrderByScore.map((player, index) => {
      return(
        <PlayerScorebackend key={player.id} player={player} index={index} />
      )
    })

      // Loop all the players. What I would like to check is if the score of the player that we're on right now is the exact score of the previous player, then the rank is the same rank as the previous score. If it's NOT the same score, then the persons rank is equal to index+1
    return(
      <table>
        <tbody>
        <tr>
          <th>Ranking</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {allPlayers}
        </tbody>
      </table>
    )
  }

  // displayerPlayersExperiment = (players) => {
  //   var allPlayers = "Hello"
  //   return(
  //     <table>
  //       <p>Experiment Display</p>
  //       <tbody>
  //       <tr>
  //         <th>Ranking</th>
  //         <th>Name</th>
  //         <th>Score</th>
  //       </tr>
  //       {allPlayers}
  //       </tbody>
  //     </table>
  //   )
  // }


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
  // eslint-disable-next-line
  const session = state.sessions.find(session => session.id == ownProps.match.params.sessionId)

  if (session) {
    return { session }
  } else {
    return { session: {} }
  }
}

export default connect(mapStateToProps)(SessionDisplay)
