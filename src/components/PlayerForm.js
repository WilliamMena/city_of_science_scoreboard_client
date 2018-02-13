import React, {Component} from 'react';
import { connect } from 'react-redux';

import {createPlayer} from '../actions/sessions.js'
import {updatePlayerFormData} from '../actions/sessionPlayerForm.js'

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      score: '',
    };
  }

  handleChange = event => {
    const {name, value} = event.target
    const currentPlayerFormData = Object.assign({}, this.props.playerForm, {
      [name]: value
    })
    this.props.updatePlayerFormData(currentPlayerFormData)
  }

  handleOnClick = () => {
    debugger
  }

  render() {
    const {name, score} = this.props.playerForm
    return(
      <div>
        <form>
          <p>
            <label>ADD A NEW PLAYER</label>
            <br/>

            <label>Player</label>
            <input name="name" type="text" value={name} onChange={(event) => this.handleChange(event)} />
            <br/>

            <label>Score</label>
            <input name="score" type="text" value={score} onChange={(event) => this.handleChange(event)} />
            <br/>

            <input type='submit' onClick={() => this.handleOnClick()} />
          </p>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // state.sessions.find(session => session.id == ownProps.session_id)

  if (state.sessionFormData) {
    return { playerForm: {
      name: state.sessionFormData.name,
      score: state.sessionFormData.score,
      session_id: ownProps.session_id
    }}
  } else {
    return { playerForm: {
      name: '',
      score: '',
      session_id: ownProps.session_id
    }}
  }

}

export default connect(mapStateToProps, {createPlayer, updatePlayerFormData})(PlayerForm);
