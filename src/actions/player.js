require('dotenv').config();

const API_URL = process.env.REACT_APP_API_URL

const addPlayer = player => {
  return {
    type: "CREATE_PLAYER_SUCCESS",
    player
  }
}

const removePlayer = player => {
  return {
    type: "REMOVE_PLAYER_SUCCESS",
    player
  }
}

export const createPlayer = (player) => {
  return dispatch => {
    return fetch(`${API_URL}/sessions/${player.session_id}/players`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: player.name, score: player.score, session_id: player.session_id})
    }).then(response => response.json())
    .then(response => dispatch(addPlayer(response)))
    .catch(error => console.log(error))
  }
}

export const destroyPlayer = playerId => {
  return dispatch => {
    return fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    .then(response => response.json())
    .then(response => dispatch(removePlayer(response)))
    .catch(error => console.log(error))
  }
}
