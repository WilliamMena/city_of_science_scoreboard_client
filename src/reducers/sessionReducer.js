const initialState = {
  id: false,
  created_at: false,
  players: []
}

export default function sessionsReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_SESSIONS_SUCCESS":
      console.log(action)
      return action.sessions

    default:
      return state;
  }
}
