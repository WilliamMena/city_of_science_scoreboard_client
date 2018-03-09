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
      // eslint-disable-next-line
      var currentSession = state.find(session => session.id == action.player.session.id)
      var updatedSession = Object.assign({}, currentSession, {players: currentSession.players.concat(action.player)})
      // eslint-disable-next-line
      var index = state.findIndex(session => session == currentSession)

      var newState = state
      newState[index] = updatedSession

      // return Object.assign([], state.slice(0, index), state.slice(index,-1)).concat(updatedSession)
      return Object.assign([], newState)

    case "REMOVE_PLAYER_SUCCESS":
      var session = state.find(session => session.id === action.player.session.id)
      var remainingSessions = state.filter(session => session.id !== parseFloat(action.player.session.id))
      var newSessionPlayers = session.players.filter(player => player.id !== parseFloat(action.player.id))

      var newSession = Object.assign({}, session)
        newSession.players = newSessionPlayers
      var allSessions = remainingSessions.concat(newSession)
      return allSessions
      // need to slice out the specific player from session.players
      // const scripts = state.filter(script => script.id !== parseFloat(action.scriptId))



    case 'ADD_SESSION_SUCCESS':
      return Object.assign([], state).concat(action.session)

    default:
      return state;
  }
}
