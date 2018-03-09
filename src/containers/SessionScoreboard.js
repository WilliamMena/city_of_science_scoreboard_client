import React, {Component} from 'react';
import {connect} from 'react-redux'

import PlayerScore from '../components/PlayerScore.js'

class SessionScoreboard extends Component {

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
        <PlayerScore key={player.id} player={player} index={index} />
      )
    })

      // Loop all the players. What I would like to check is if the score of the player that we're on right now is the exact score of the previous player, then the rank is the same rank as the previous score. If it's NOT the same score, then the persons rank is equal to index+1
    return(
      <div>
        <h2>WARPED SPACE GRAVITY SIMULATOR</h2>
        <h2>SCOREBOARD</h2>
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
        {
          /*
          <meta httpEquiv="refresh" content="10" />
          */
        }
        {<meta httpEquiv="refresh" content="6" />}
      </div>
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
        <div className="scoreboard_display_only">
          {this.props.session.players ? this.displayPlayers(this.props.session.players) : ""}
          <div className="hidden">
            {document.body.style.backgroundColor="black"}
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

export default connect(mapStateToProps)(SessionScoreboard)
