import React, {Component} from 'react';
import {connect} from 'react-redux'

import PlayerScore from '../components/PlayerScore.js'

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

  // displayPlayers = (players) => {
  //   const allPlayers = players.map(player => {
  //     console.log(player)
  //     return <PlayerScore />
  //   })
  //   debugger
  //   return (
  //     <ul>
  //       {allPlayers.join()}
  //     </ul>
  //   )
  // }

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
        ID: {this.props.session.id}

        {this.props.session.players ? this.displayPlayers(this.props.session.players) : "No players yet"}
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
