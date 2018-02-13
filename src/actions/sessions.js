require('dotenv').config();

const API_URL = process.env.REACT_APP_API_URL



// action creators - typically used in the async actions below
const setSessions = sessions => {
  return {
    type: "GET_SESSIONS_SUCCESS",
    sessions
  }
}

const addPlayer = player => {
  return {
    type: "CREATE_PLAYER_SUCCESS",
    player
  }
}

// Async actions

export const getSessions = () => {
  return dispatch => {
    return fetch(`${API_URL}/sessions`)
      .then(resp => resp.json())
      .then(sessions => {
        dispatch(setSessions(sessions))
      })
      .catch(error => console.log(error))
  }
}

export const createPlayer = (player) => {
  return dispatch => {
    return fetch(`${API_URL}/sessions/${player.session_id}/players`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: player.name, score: player.score, session_id: player.session_id})
    }).then(response => dispatch(addPlayer(response)))
    .catch(error => console.log(error))
  }
}
