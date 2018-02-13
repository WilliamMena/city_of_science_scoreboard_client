const initialState = [{
  id: false,
  created_at: false,
  players: []
}]

export default function sessionsReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_SESSIONS_SUCCESS":
      return action.sessions

    case "CREATE_PLAYER_SUCCESS":
      var currentSession = state.find(session => session.id == action.player.session.id)
      var updatedSession = Object.assign({}, currentSession, {players: currentSession.players.concat(action.player)})
      var index = state.findIndex(session => session == currentSession)
      return Object.assign([], state.slice(0, index), state.slice(index,-1)).concat(updatedSession)

    default:
      return state;
  }
}
