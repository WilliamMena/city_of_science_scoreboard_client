require('dotenv').config();

const API_URL = process.env.REACT_APP_API_URL



// action creators - typically used in the async actions below
const setSessions = sessions => {
  return {
    type: "GET_SESSIONS_SUCCESS",
    sessions
  }
}

const addSession = session => {
  return {
    type: "ADD_SESSION_SUCCESS",
    session
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

export const createSession = () => {
  return dispatch => {
    return fetch(`${API_URL}/sessions`, {
      method: "POST",
      headers: {"Content-Type": "application/json"}
    }).then(response => response.json())
    .then(session => dispatch(addSession(session)))
    .catch(error => console.log(error))
  }
}
