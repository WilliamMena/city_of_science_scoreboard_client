import React, {Component} from 'react';
import { connect } from 'react-redux';

import {destroyPlayer} from '../actions/player.js'

class PlayerScoreBackend extends Component {


  handleOnClick = event => {
    event.preventDefault()
    this.props.destroyPlayer(event.target.value)
  }

render() {
  return(
    <tr id={`rank_${this.props.index+1}`}>
      <td>{this.props.index+1}</td>
      <td>{this.props.player.name.toUpperCase()}</td>
      <td>{this.props.player.score}</td>
      <td><button value={this.props.player.id} onClick={event => this.handleOnClick(event)}>Delete Player</button></td>
    </tr>
  )
}
}

const mapStateToProps = state => {
  return {
    playerReducer: state.playerReducer
  }

}

export default connect(mapStateToProps, {destroyPlayer})(PlayerScoreBackend);
