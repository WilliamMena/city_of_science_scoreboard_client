require('dotenv').config();

const API_URL = process.env.REACT_APP_API_URL



// action creators - typically used in the async actions below
const setSessions = sessions => {
  return {
    type: "GET_SESSIONS_SUCCESS",
    sessions
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
